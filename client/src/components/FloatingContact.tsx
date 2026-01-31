import { Link } from "wouter";
import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 flex items-center justify-center group"
        >
          <MessageSquareText className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-display uppercase tracking-wider text-sm whitespace-nowrap">
            Get in Touch
          </span>
        </motion.button>
      </Link>
    </div>
  );
}
