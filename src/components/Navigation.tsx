'use client'
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Account from "/public/Account.svg";
import work from "/public/work.svg";
import contact from "/public/contact.svg";
import ShineBorder from "@/components/magicui/shine-border";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const iconWidth = 30;
  const iconHeight = 30;
  const Links = [
    {
      Name: "About",
      href: "/about",
      icon: Account,
    },
    {
      Name: "Works",
      href: "/work",
      icon: work,
    },
    {
      Name: "Contact",
      href: "/contact",
      icon: contact,
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "30%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <ShineBorder
          borderWidth={2}
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          className=" flex flex-col items-center justify-center gap-3 first:pt-1 bg-[#ffffff] p-3 rounded-lg md:shadow-xl min-w-[auto]"
        >
          {Links.map((link, index) => (
            <Link href={link.href} key={index}>
              <Button className="bg-[radial-gradient(circle_at_100px_100px,#5cabff,#000)] text-white">
                {link.icon && <link.icon className=" size-6 text-white" />}
                <span> {link.Name}</span>
              </Button>
            </Link>
          ))}
        </ShineBorder>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigation;
