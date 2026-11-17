import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(req: Request) {
  try {
    const parsed = Email.safeParse(await req.json());
    if (!parsed.success) {
      return Response.json({ error: "Revisa tus datos y escribe un mensaje de al menos 10 caracteres." }, { status: 400 });
    }
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "El envío de mensajes aún no está configurado. Escríbeme directamente por correo." }, { status: 503 });
    }

    const { fullName, email, message } = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portafolio <onboarding@resend.dev>",
      to: [config.email],
      replyTo: email,
      subject: `Nuevo mensaje del portafolio: ${fullName}`,
      react: EmailTemplate({ fullName, email, message }),
    });
    if (error) {
      console.error("Error al enviar el mensaje con Resend:", error.message);
      return Response.json({ error: "No se pudo enviar el mensaje. Inténtalo más tarde o escríbeme directamente." }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "No se pudo enviar el mensaje. Inténtalo más tarde o escríbeme directamente." }, { status: 500 });
  }
}
