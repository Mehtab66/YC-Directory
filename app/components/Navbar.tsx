import { auth } from "@/auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
                          </Link>
                          <button onClick={() => signOut()}>
                              <span>Logout</span>
                          </button>
                          <Link href={`/users/${session?.id}`}>
                          {session.user.name}
                          </Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
      Navbar
    </header>
  );
};

export default Navbar;
