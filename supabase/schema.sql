create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  avatar_url text,
  phone text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.staff_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  role text not null default 'staff',
  status text not null default 'active',
  permissions text[] not null default '{}',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.homepage_content (
  id uuid primary key default gen_random_uuid(),
  headline text not null,
  subheadline text not null,
  cta_primary text not null,
  cta_secondary text not null,
  trust_line text not null,
  why_choose_us text[] not null default '{}',
  cta_headline text not null,
  cta_body text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  summary text not null,
  description text not null,
  features text[] not null default '{}',
  deliverables text[] not null default '{}',
  icon text not null,
  hero_stat text not null,
  price_guide text not null,
  seo_title text not null,
  seo_description text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  client text not null,
  challenge text not null,
  solution text not null,
  results text[] not null default '{}',
  services text[] not null default '{}',
  year text not null,
  image text,
  excerpt text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  featured_image text,
  tags text[] not null default '{}',
  category text not null,
  author text not null,
  status text not null default 'draft',
  published_at timestamptz,
  scheduled_for timestamptz,
  read_time text,
  seo_title text not null,
  seo_description text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  role text not null,
  quote text not null,
  rating int not null default 5,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  service text not null,
  budget text,
  description text not null,
  status text not null default 'new',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  contact_person text not null,
  email text not null,
  phone text,
  notes text,
  status text not null default 'new',
  value numeric(12,2) not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.visitors (
  id uuid primary key default gen_random_uuid(),
  visited_on date not null,
  visitors int not null default 0,
  conversions int not null default 0,
  device_breakdown jsonb not null default '{}'::jsonb,
  traffic_sources jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  page_path text not null,
  views int not null default 0,
  period_label text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.seo_settings (
  id uuid primary key default gen_random_uuid(),
  page text unique not null,
  title text not null,
  description text not null,
  keywords text[] not null default '{}',
  canonical_url text not null,
  og_title text not null,
  og_description text not null,
  score int not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.media_library (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  file_type text not null,
  file_size text,
  storage_path text not null,
  public_url text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid references auth.users(id) on delete cascade,
  title text not null,
  body text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity text not null,
  entity_id uuid,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)));

  insert into public.staff_accounts (user_id, role, status, permissions)
  values (new.id, 'staff', 'active', array['analytics','crm','cms']);

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

do $$
declare
  item record;
begin
  for item in
    select table_name
    from information_schema.columns
    where table_schema = 'public' and column_name = 'updated_at'
  loop
    execute format('drop trigger if exists set_%I_updated_at on public.%I', item.table_name, item.table_name);
    execute format('create trigger set_%I_updated_at before update on public.%I for each row execute procedure public.set_updated_at()', item.table_name, item.table_name);
  end loop;
end $$;

alter table public.profiles enable row level security;
alter table public.staff_accounts enable row level security;
alter table public.homepage_content enable row level security;
alter table public.services enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.blog_posts enable row level security;
alter table public.testimonials enable row level security;
alter table public.faqs enable row level security;
alter table public.messages enable row level security;
alter table public.quote_requests enable row level security;
alter table public.leads enable row level security;
alter table public.visitors enable row level security;
alter table public.page_views enable row level security;
alter table public.seo_settings enable row level security;
alter table public.media_library enable row level security;
alter table public.notifications enable row level security;
alter table public.activity_logs enable row level security;

create policy "Public can read website content" on public.homepage_content for select using (true);
create policy "Public can read services" on public.services for select using (true);
create policy "Public can read portfolio" on public.portfolio_projects for select using (true);
create policy "Public can read published blog posts" on public.blog_posts for select using (status = 'published');
create policy "Public can read testimonials" on public.testimonials for select using (true);
create policy "Public can read faqs" on public.faqs for select using (true);
create policy "Public can submit messages" on public.messages for insert with check (true);
create policy "Public can submit quote requests" on public.quote_requests for insert with check (true);

create policy "Staff can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Staff can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Authenticated staff can read staff accounts" on public.staff_accounts for select using (auth.role() = 'authenticated');
create policy "Authenticated staff can manage homepage content" on public.homepage_content for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage services" on public.services for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage portfolio" on public.portfolio_projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage blog posts" on public.blog_posts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage testimonials" on public.testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage faqs" on public.faqs for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can read messages" on public.messages for select using (auth.role() = 'authenticated');
create policy "Authenticated staff can update messages" on public.messages for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can read quote requests" on public.quote_requests for select using (auth.role() = 'authenticated');
create policy "Authenticated staff can update quote requests" on public.quote_requests for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage leads" on public.leads for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage visitors" on public.visitors for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage page views" on public.page_views for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage seo settings" on public.seo_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated staff can manage media" on public.media_library for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Users can read own notifications" on public.notifications for select using (auth.uid() = recipient_id);
create policy "Authenticated staff can read activity logs" on public.activity_logs for select using (auth.role() = 'authenticated');
create policy "Authenticated staff can insert activity logs" on public.activity_logs for insert with check (auth.role() = 'authenticated');

insert into storage.buckets (id, name, public)
values ('media-library', 'media-library', true)
on conflict (id) do nothing;

create policy "Public can read media files" on storage.objects for select using (bucket_id = 'media-library');
create policy "Authenticated staff can upload media files" on storage.objects for insert with check (bucket_id = 'media-library' and auth.role() = 'authenticated');
create policy "Authenticated staff can update media files" on storage.objects for update using (bucket_id = 'media-library' and auth.role() = 'authenticated');
create policy "Authenticated staff can delete media files" on storage.objects for delete using (bucket_id = 'media-library' and auth.role() = 'authenticated');
