import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navigation = () => {
  const Links = [
    {
      Name: "About",
      href: "/about",
    },
    {
      Name: "Works",
      href: "/works",
    },
    {
      Name: "Contact",
      href: "/conatact",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {Links.map((link, index) => (
        <Link href={link.href} key={index}>
          <Button className="bg-[radial-gradient(circle_at_100px_100px,#5cabff,#000)]">
            {link.Name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
