"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {}
  }

  return (
    <div>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

export default Header;
