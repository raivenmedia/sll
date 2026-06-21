import { Card } from "@/components/ui/card";
import { currency } from "@/lib/utils";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function LeadsPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <Card>
      <h2 className="text-2xl font-black text-black">Lead management</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-black/10 text-neutral-500"><tr><th className="py-3">Company</th><th>Contact</th><th>Notes</th><th>Status</th><th>Value</th></tr></thead>
          <tbody>
            {snapshot.leads.map((item) => (
              <tr key={item.id} className="border-b border-black/5 align-top"><td className="py-4 font-semibold text-black">{item.company}</td><td>{item.contactPerson}<p className="text-neutral-500">{item.email}</p></td><td className="max-w-sm">{item.notes}</td><td className="font-semibold capitalize">{item.status}</td><td>{currency(item.value)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
