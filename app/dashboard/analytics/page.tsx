import { MetricCard } from "@/components/dashboard/metric-card";
import { DeviceChart, SourceChart } from "@/components/dashboard/share-chart";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { getDashboardSnapshot } from "@/lib/supabase/service";

export default async function DashboardAnalyticsPage() {
  const snapshot = await getDashboardSnapshot();
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {snapshot.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </div>
      <TrafficChart data={snapshot.weeklyTraffic} title="Weekly traffic" />
      <TrafficChart data={snapshot.monthlyTraffic} title="Monthly traffic" color="#111111" />
      <div className="grid gap-6 xl:grid-cols-2">
        <DeviceChart data={snapshot.deviceBreakdown} />
        <SourceChart data={snapshot.trafficSources} />
      </div>
    </div>
  );
}
