import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="h-screen grid place-items-center">{children}</main>;
}
