"use client";

import { useState } from "react";
import { companySettings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SettingsForm() {
  const [settings, setSettings] = useState(companySettings);

  return (
    <div className="grid gap-6 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] lg:grid-cols-2">
      <Input value={settings.companyName} onChange={(event) => setSettings({ ...settings, companyName: event.target.value })} />
      <Input value={settings.email} onChange={(event) => setSettings({ ...settings, email: event.target.value })} />
      <Input value={settings.phone} onChange={(event) => setSettings({ ...settings, phone: event.target.value })} />
      <Input value={settings.address} onChange={(event) => setSettings({ ...settings, address: event.target.value })} />
      <Input value={settings.socials.facebook} onChange={(event) => setSettings({ ...settings, socials: { ...settings.socials, facebook: event.target.value } })} />
      <Input value={settings.socials.instagram} onChange={(event) => setSettings({ ...settings, socials: { ...settings.socials, instagram: event.target.value } })} />
      <Input value={settings.socials.linkedin} onChange={(event) => setSettings({ ...settings, socials: { ...settings.socials, linkedin: event.target.value } })} />
      <Input value={settings.socials.whatsapp} onChange={(event) => setSettings({ ...settings, socials: { ...settings.socials, whatsapp: event.target.value } })} />
      <div className="lg:col-span-2 flex justify-end">
        <Button type="button" variant="secondary">Save settings</Button>
      </div>
    </div>
  );
}
