import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, style = {} }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
