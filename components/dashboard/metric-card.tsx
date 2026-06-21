import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { DashboardMetric } from "@/lib/types";
import { number, percent } from "@/lib/utils";

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  return (
    <Card>
      <p className="text-sm text-neutral-500">{metric.label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="text-3xl font-black text-black">{metric.label === "Conversion Rate" ? percent(metric.value) : number(metric.value)}</p>
        <div className="inline-flex items-center gap-1 rounded-full bg-[#f4c400]/15 px-3 py-1 text-xs font-semibold text-black">
          <ArrowUpRight className="h-3 w-3" />
          {percent(metric.change)}
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-500">{metric.helper}</p>
    </Card>
  );
}
