import { Card } from "@/components/ui/card";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function QuotesPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <Card>
      <h2 className="text-2xl font-black text-black">Quote requests</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-black/10 text-neutral-500"><tr><th className="py-3">Requester</th><th>Company</th><th>Service</th><th>Budget</th><th>Status</th></tr></thead>
          <tbody>
            {snapshot.quoteRequests.map((item) => (
              <tr key={item.id} className="border-b border-black/5 align-top"><td className="py-4 font-semibold text-black">{item.name}<p className="text-xs text-neutral-500">{item.email}</p></td><td>{item.company}</td><td>{item.service}</td><td>{item.budget}<p className="mt-1 text-neutral-500">{item.description}</p></td><td className="font-semibold capitalize">{item.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
