import { Card } from "@/components/ui/card";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function MessagesPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <Card>
      <h2 className="text-2xl font-black text-black">Inbound messages</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-black/10 text-neutral-500"><tr><th className="py-3">Name</th><th>Email</th><th>Phone</th><th>Subject</th><th>Status</th></tr></thead>
          <tbody>
            {snapshot.messages.map((item) => (
              <tr key={item.id} className="border-b border-black/5 align-top"><td className="py-4 font-semibold text-black">{item.name}<p className="text-xs text-neutral-500">{item.receivedAt}</p></td><td>{item.email}</td><td>{item.phone}</td><td className="max-w-xs">{item.subject}<p className="mt-1 text-neutral-500">{item.message}</p></td><td className="font-semibold capitalize">{item.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
