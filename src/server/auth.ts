import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from 'next-auth/providers/discord';


import { env } from "~/env.mjs";
import { db } from "~/server/db";

const providers = [];

if (env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET) {
  providers.push(DiscordProvider({
    clientId: env.DISCORD_CLIENT_ID,
    clientSecret: env.DISCORD_CLIENT_SECRET,
  }));
}

providers.push(CredentialsProvider({
  name: 'password',
  credentials: {
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' }
  },
  async authorize(credentials) {
    const user = await db.user.findUnique({
      where: {
        username: credentials?.username
      }
    })

    // TODO: Password should be stored as hash
    if (user && user.password == credentials?.password) {
      return user;
    }

    return null;
  }
}))

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(db),
  providers,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
