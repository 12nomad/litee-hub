import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Litee Hub",
  description: "The best gaming spot online",
};

const Page = () => {
  return <SignIn />;
};

export default SignIn;
