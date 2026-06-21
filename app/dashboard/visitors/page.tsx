import { Card } from "@/components/ui/card";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function VisitorsPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <div className="space-y-8">
      <TrafficChart data={snapshot.dailyTraffic} title="Visitors today" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-bold text-black">Visitor insights</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">Daily traffic peaks align with campaign launch windows and outbound lead response activity. Use the CRM and quote workflows to improve conversion after high-intent sessions.</p>
        </Card>
        <Card className="bg-black text-white">
          <h2 className="text-xl font-bold text-[#f4c400]">Page view momentum</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">Monitor service pages, portfolio detail pages, and quote conversion steps to identify which assets deserve more internal links and paid amplification.</p>
        </Card>
      </div>
    </div>
  );
}
