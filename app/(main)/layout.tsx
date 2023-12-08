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
        <main className="col-span-12 lg:col-span-7 p-4 lg:p-8 overflow-x-hidden overflow-y-auto h-[calc(100vh-76px)] no-scrollbar">
          {children}
        </main>
        <RightSidebar />
      </div>
    </>
  );
}
