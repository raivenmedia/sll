"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TrafficPoint } from "@/lib/types";

export function TrafficChart({ data, color = "#f4c400", title }: { data: TrafficPoint[]; color?: string; title: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-neutral-500">Visitors, page views, and conversions trend.</p>
      </div>
      <div className="h-80">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`traffic-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.45} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="label" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip />
              <Area type="monotone" dataKey="visitors" stroke={color} fillOpacity={1} fill={`url(#traffic-${title})`} strokeWidth={3} />
              <Area type="monotone" dataKey="conversions" stroke="#111111" fillOpacity={0} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full animate-pulse rounded-[1.5rem] bg-black/5" />
        )}
      </div>
    </div>
  );
}
