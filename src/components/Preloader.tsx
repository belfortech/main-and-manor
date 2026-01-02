import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-onyx z-[9999] bg-hero-grid">
      <div className="flex flex-col items-center gap-6 glass-panel px-8 py-6">
        <div className="relative">
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-warmSandstone border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-1 rounded-full bg-warmSandstone/15 blur-md"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
        <p className="text-sand text-sm tracking-[0.3em] uppercase">
          Main & Manor ....
        </p>
      </div>
    </div>
  );
}
