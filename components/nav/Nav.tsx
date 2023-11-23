import { Lobster } from "next/font/google";

import SearchInput from "../search-input/SearchInput";
import UserAccount from "./components/user-account/UserAccount";
import MobileMenu from "./components/mobile-menu/MobileMenu";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  display: "block",
});

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 lg:px-8 py-4 bg-black-raisin">
      <h3 className={`${lobster.className} text-lg tracking-wide`}>
        Litee{" "}
        <span className="px-2 py-1 bg-yellow-bus text-black-raisin rounded-md">
          Hub
        </span>
      </h3>

      <SearchInput
        placeholder="search topics, users..."
        otherClass="hidden lg:block w-1/3"
      />

      <div className="flex items-center gap-4">
        <MobileMenu />
        <UserAccount />
      </div>
    </nav>
  );
};

export default Nav;
