import { FunctionComponent, useState } from "react";
import { MobileNav } from "../components/MobileNav";
import LogoImage from "../assets/logo.png";
import { NavLinks } from "../utils/NavLinks";
import { NavLink } from "../components/NavLink";
import { CallToActions } from "../components/CallToActions";
import OpenNavImage from "../assets/open-nav.png"

export const Header: FunctionComponent = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const setNavOpen = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="flex items-center justify-between">
      <div className="border ">
        <img src={LogoImage} />
      </div>
      <div className="flex gap-[20px] max-md:hidden max-lg:text-sm">
        {NavLinks.map((link, index) => (
          <NavLink key={index} href={link.link} content={link.name} />
        ))}
      </div>
      <div className="max-md:hidden">
        <CallToActions inDesktop />
      </div>
      <div className="md:hidden" onClick={() => {
        setOpenNav(!openNav)
      }}>
        <img src={OpenNavImage} />
      </div>
      {openNav ? <MobileNav setNavOpen={setNavOpen} /> : null}
    </header>
  );
};
