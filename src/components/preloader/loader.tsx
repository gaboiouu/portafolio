"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePreloader } from ".";

export default function Index() {
  const { loadingPercent } = usePreloader();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={styles.introduction}
      aria-hidden="true"
    >
      <p>{Math.min(100, Math.round(loadingPercent))} %</p>
    </motion.div>
  );
}
