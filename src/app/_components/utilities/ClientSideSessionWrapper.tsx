'use client'

import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";

export default function ClientSideSessionWrapper({children, session}: {children: React.ReactNode , session: Session | null}) {
  return (  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  );
}
