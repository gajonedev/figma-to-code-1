import CloseNavImage from "../assets/close-nav.png";
import { NavLinks } from "../utils/NavLinks";
import { CallToActions } from "./CallToActions";
import { NavLink } from "./NavLink";

export const MobileNav = ({
  setNavOpen,
}: {
  setNavOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <nav className="min-w-full min-h-full md:hidden">
      <div className="flex justify-end">
        <div className="cursor-pointer" onClick={setNavOpen}>
          <img src={CloseNavImage} />
        </div>
      </div>
      <div className="flex flex-col gap-[1.8rem] mt-[3rem]">
        {NavLinks.map((link, index) => (
          <NavLink key={index} href={link.link} content={link.name} />
        ))}
      </div>
      <CallToActions inDesktop={false} />
    </nav>
  );
};
