let audioContext: AudioContext | undefined;

/** A short, quiet mechanical-key sound, created only after a user interaction. */
export function playKeyboardSound() {
  try {
    audioContext ??= new AudioContext();
    const context = audioContext;
    if (context.state === "suspended") void context.resume().catch(() => {});

    const now = context.currentTime;
    const duration = 0.045;
    const noise = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i++) {
      samples[i] = (Math.random() * 2 - 1) * Math.exp((-i / samples.length) * 8);
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = noise;
    filter.type = "bandpass";
    filter.frequency.value = 1500 + Math.random() * 350;
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.10, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    source.connect(filter).connect(gain).connect(context.destination);
    source.start(now);
    source.stop(now + duration);
  } catch {
    // Audio is optional; the keyboard remains usable if the browser blocks it.
  }
}
