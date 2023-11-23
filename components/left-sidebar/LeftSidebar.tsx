import NavLinks from "../nav-links/NavLinks";

const LeftSidebar = () => {
  return (
    <nav className="col-span-2 p-8 bg-black-raisin h-[calc(100vh-76px)] hidden lg:block">
      <NavLinks />
    </nav>
  );
};

export default LeftSidebar;
