import { ReactNode } from "react";

import Nav from "../../components/nav/Nav";
import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import RightSidebar from "../../components/rigth-sidebar/RightSidebar";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-12">
        <LeftSidebar />
        <main className="col-span-12 lg:col-span-7 p-4 lg:p-8">{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
