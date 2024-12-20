"use client";

import Link from "next/link";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  id: string;
  name: string;
}

function SidebarOption({ href, id, name }: Props) {
  // const [data, loading, error] = useDocumentData(doc(db, "repoNames", id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";

  // console.log(data)

  return (
    <Link
      href={href}
      className={`text-center border p-2 w-[200px] rounded-md ${
        isActive ? "bg-gray-300 font-bold border-black" : "border-gray-400"
      }`}
    >
      <p className="truncate capitalize tracking-[0.2rem] text-md">{name}</p>
    </Link>
  );
}
export default SidebarOption;
