import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session) {
    // should pass the referred query so that user can be redirected back to page they were trying to access
    // /api/auth/signin?referred=dashboard
    redirect('/api/auth/signin');
  }
  return <div>{children}</div>;
}
