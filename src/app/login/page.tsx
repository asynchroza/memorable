import Image from "next/image";

import { getServerAuthSession } from "~/server/auth";
import Login from "../_components/Login/Login";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex justify-end h-[100vh]">
      <Image
        src="/laughing_people_login.jpeg"
        alt="Reviews"
        objectFit="cover"
        width={5090}
        height={3393}
      />
        <Login />
    </div>
  );
}
