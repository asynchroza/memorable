import { getServerAuthSession } from "~/server/auth";
import ClientNavigation from "./ClientNavigationWrapper";
import { MainNavigation } from "./MainNavigation";

export default async function Navigation() {
  const session = await getServerAuthSession();

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNavigation className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ClientNavigation session={session}/>
          </div>
        </div>
      </div>
    </div>
  );
}
