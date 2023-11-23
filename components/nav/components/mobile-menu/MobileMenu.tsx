"use client";

import { useState } from "react";
import { RiMenu4Fill, RiCloseCircleFill } from "react-icons/ri";

import NavLinks from "../../../nav-links/NavLinks";

const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavToggle = (val: boolean) => setIsNavOpen(val);

  return (
    <div className="lg:hidden">
      <RiMenu4Fill className="w-6 h-6" onClick={() => onNavToggle(true)} />

      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 bg-black transition-all ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <RiCloseCircleFill
          className="absolute top-4 right-4 w-6 h-6"
          onClick={() => onNavToggle(false)}
        />

        <div className="grid h-full w-full place-items-center">
          <NavLinks onNavToggle={onNavToggle} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
