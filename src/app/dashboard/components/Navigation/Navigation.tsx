import { MainNavigation } from "./MainNavigation";
import { UserNavigation } from "./UserNavigation";

export default function Navigation() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNavigation className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
