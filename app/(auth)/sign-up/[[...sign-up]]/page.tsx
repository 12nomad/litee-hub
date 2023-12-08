import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | Litee Hub",
  description: "The best gaming spot online",
};

const Page = () => {
  return <SignUp />;
};

export default Page;
