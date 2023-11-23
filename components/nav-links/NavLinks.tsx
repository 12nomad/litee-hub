"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinks from "../../constants/nav-links";

interface INavLinks {
  onNavToggle?: (val: boolean) => void;
}

const NavLinks = ({ onNavToggle }: INavLinks) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-8">
      {navLinks.map(({ href, label, icon: Icon }) => (
        <li
          key={href + label}
          onClick={() => (onNavToggle ? onNavToggle(false) : undefined)}
        >
          <Link
            href={href}
            className={`font-bold flex items-center gap-2 ${
              pathname === href
                ? "bg-yellow-bus text-black-raisin rounded-md -ml-2 px-2 py-3"
                : ""
            }`}
          >
            <Icon size={22} />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
