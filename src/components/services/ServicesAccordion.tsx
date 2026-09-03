"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ServiceItem = {
  title: string;
  summary: string;
  details: string[];
};

const services: ServiceItem[] = [
  {
    title: "Full Service Design",
    summary:
      "An intimate, hands-on process from the first paint swatch to the final selection of drapes.",
    details: [
      "AVD ensures an intimate and thoughtful experience every step of the way with her custom full-service design process — from the first paint swatch to the final selection of drapes, it's all in the details for us.",
      "Full-service design is a great fit for those seeking a hands-on approach to their project regardless of the scale. Through this service, we offer design concepts, project management, trade communication, procurement, ordering, furniture design, and styling to ensure you enjoy the process of making your space beautiful and uniquely you.",
    ],
  },
  {
    title: "Design Consultation",
    summary:
      "Professional guidance for those designing their own homes, beginning with a complimentary 30 minute consultation.",
    details: [
      "For those designing their own homes or seeking professional guidance, a consultation service is available. We begin with a 30 minute consultation and then we will provide 3 design concepts for each defined room, offering ideas for furnishings, room layout, materials, and final touches.",
    ],
  },
];

export function ServicesAccordion() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {services.map((service) => {
        const isOpen = openTitle === service.title;

        return (
          <div key={service.title}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-8 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenTitle(isOpen ? null : service.title)}
            >
              <div>
                <h2 className="font-serif text-3xl text-[var(--accent)]">{service.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--ink-soft)]">{service.summary}</p>
              </div>
              <span
                className="mt-2 shrink-0 text-xs uppercase tracking-[0.16em] text-[var(--accent)]"
                aria-hidden="true"
              >
                {isOpen ? "Read less" : "Read more"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 pb-10 text-base leading-8 text-[var(--ink-soft)]">
                    {service.details.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
