import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "./contactData";

const BottomCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Prefer to Talk to Someone?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Our family is here to help. Call us directly for a friendly,
            no-pressure conversation about your situation.
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-3 px-8 py-4 min-h-[56px] rounded-xl text-xl font-bold transition-all hover:scale-105"
            style={{ backgroundColor: "#F5B800", color: "#373128" }}
          >
            <Phone className="w-6 h-6" />
            {PHONE_NUMBER}
          </a>
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Mon-Fri 9am-6pm • No obligation • 100% confidential
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
