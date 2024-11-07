"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+380) 96 536 0759 (WhatsApp, Telegram)",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amirov45128@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ukraine, Kryviy Rih 50000",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto mt-14">
        <div className="flex flex-col items-center">
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end  mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl ">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-white/30 max-w-[500px] mt-20 text-center w-full">
            Open to both short-term and long-term projects. Always ready to
            work, no matter the hour.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
