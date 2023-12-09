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
          <CustomButton
            title="Sign in"
            size="sm"
            svg={
              <svg
                className="w-4 h-4 text-black-raisin ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            }
          />
        </Link>
      </SignedOut>
    </>
  );
};

export default UserAccount;
