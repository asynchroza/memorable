import { Suspense } from "react";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default function Reviews() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Suspense fallback={<h1>LOADING</h1>}>
        <CrudShowcase />
      </Suspense>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestReviews = await api.review.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestReviews ? latestReviews.map((review) => (<p key={review.id}>{review.comment}</p>)) : null}
    </div>
  );
}
