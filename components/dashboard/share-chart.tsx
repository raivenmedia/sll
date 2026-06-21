"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DeviceShare, SourceShare } from "@/lib/types";

const colors = ["#f4c400", "#111111", "#7c7c7c", "#f7d95f", "#4b5563"];

export function DeviceChart({ data }: { data: DeviceShare[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
      <h3 className="text-xl font-bold text-black">Device Breakdown</h3>
      <div className="mt-4 h-72">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={3}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full animate-pulse rounded-[1.5rem] bg-black/5" />
        )}
      </div>
    </div>
  );
}

export function SourceChart({ data }: { data: SourceShare[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
      <h3 className="text-xl font-bold text-black">Traffic Sources</h3>
      <div className="mt-4 h-72">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip />
              <Bar dataKey="visitors" fill="#111111" radius={[8, 8, 0, 0]} />
              <Bar dataKey="conversions" fill="#f4c400" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full animate-pulse rounded-[1.5rem] bg-black/5" />
        )}
      </div>
    </div>
  );
}
