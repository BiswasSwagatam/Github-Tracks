"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";
import { Github } from "lucide-react";
import Link from "next/link";

function Header() {
  const { user } = useUser();

  return (
    <div className="sticky z-10 flex items-center justify-between p-2">
      {/* {user && (
        <h1 className="font-[500] tracking-[0.3rem] text-md">
          {`${user?.firstName} `}
          is checking engagements
        </h1>
      )} */}

      {/* <Breadcrumbs /> */}

      <Link href={"/"} className="flex items-center gap-1 font-bold">
        <Github />
        Tracks
      </Link>

      <div className="mt-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
export default Header;
