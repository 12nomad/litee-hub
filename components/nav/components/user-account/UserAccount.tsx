import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import CustomButton from "../../../custom-button/CustomButton";

const UserAccount = () => {
  // const isUserLoggedIn = false;

  // if (!isUserLoggedIn)
  //   return <CustomButton title="Sign in" icon={AiOutlineLogin} size="sm" />;

  return (
    <>
      {/* <Dropdown
       label={<div className="w-10 h-10 rounded-full bg-yellow-bus"></div>}
       placement="bottom-end"
       className="bg-black-raisin-tint border-none rounded-md"
       arrowIcon={false}
       inline
     >
       <Dropdown.Header>
         <span className="block text-sm text-white-powder">Bonnie Green</span>
         <span className="block truncate text-sm font-medium text-gray-400">
           bonnie@flowbite.com
         </span>
       </Dropdown.Header>
       <Dropdown.Item className="text-white-powder focus:bg-black-raisin hover:bg-black-raisin mt-1">
         Settings
       </Dropdown.Item>
       <Dropdown.Item className="text-white-powder focus:bg-black-raisin hover:bg-black-raisin">
         Sign out
       </Dropdown.Item>
     </Dropdown> */}
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: { avatarBox: "h-11 w-11" },
          }}
        />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <CustomButton title="Sign in" size="sm" />
        </Link>
      </SignedOut>
    </>
  );
};

export default UserAccount;
