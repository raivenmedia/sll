import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/metric-card";
import { DeviceChart, SourceChart } from "@/components/dashboard/share-chart";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function DashboardPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {snapshot.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </div>
      <TrafficChart data={snapshot.dailyTraffic} title="Daily traffic" />
      <div className="grid gap-6 xl:grid-cols-2">
        <DeviceChart data={snapshot.deviceBreakdown} />
        <SourceChart data={snapshot.trafficSources} />
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-1"><h2 className="text-xl font-bold text-black">Pipeline snapshot</h2><p className="mt-4 text-sm leading-7 text-neutral-600">{snapshot.quoteRequests.length} active quote requests, {snapshot.leads.length} tracked leads, and {snapshot.messages.length} recent inbound messages.</p></Card>
        <Card className="xl:col-span-2 bg-black text-white"><h2 className="text-xl font-bold text-[#f4c400]">Operational focus</h2><p className="mt-4 text-sm leading-7 text-white/75">Use the CRM to triage demand, the CMS to keep public content fresh, the SEO center to improve discoverability, and the media library to keep assets organized.</p></Card>
      </div>
    </div>
  );
}
