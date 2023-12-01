'use client'

import { SessionProvider } from "next-auth/react";
import { UserNavigation } from "./UserNavigation";
import { type Session } from "next-auth";

// having session as null might result in a runtime exception when fetching the session in client side components
export default function ClientNavigation({session}: {session: Session | null}) {
  return (  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
        <UserNavigation/>
    </SessionProvider>
  );
}
