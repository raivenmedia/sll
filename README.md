# Yolic Platform

A production-ready Next.js 15 platform for Yolic combining a corporate website, CMS, CRM, analytics dashboard, blog, SEO center, media library, and staff portal.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React
- Zustand
- React Hook Form + Zod
- Supabase Auth / Database / Storage
- Resend
- Vercel

## Features

- Public marketing website with CMS-driven content routes
- Dynamic services, portfolio, and blog detail pages
- Staff dashboard with analytics, visitor reporting, CRM, CMS, SEO, media library, and settings modules
- Supabase-ready API routes for contact and quote requests
- Demo auth flow for local work and Supabase Auth support for production
- Generated sitemap, robots.txt, metadata, and Open Graph image
- Supabase SQL schema with RLS policies and storage bucket configuration

## Route Map

### Public

- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/portfolio`
- `/portfolio/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/quote`
- `/login`

### Staff dashboard

- `/dashboard`
- `/dashboard/analytics`
- `/dashboard/visitors`
- `/dashboard/crm/messages`
- `/dashboard/crm/quotes`
- `/dashboard/crm/leads`
- `/dashboard/cms/homepage`
- `/dashboard/cms/services`
- `/dashboard/cms/portfolio`
- `/dashboard/cms/blog`
- `/dashboard/cms/testimonials`
- `/dashboard/cms/faqs`
- `/dashboard/media-library`
- `/dashboard/seo`
- `/dashboard/settings`

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Configure `.env.local`:

   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`

4. Apply the Supabase schema:

   - Open Supabase SQL Editor
   - Run `/home/runner/work/sll/sll/supabase/schema.sql`
   - Create at least one auth user for dashboard access

5. Start development:

   ```bash
   npm run dev
   ```

## Demo mode

If Supabase environment variables are missing, sign in at `/login` with any valid email address and any password containing at least 8 characters. The middleware will issue a demo cookie and allow dashboard access locally.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Add all values from `.env.example` to the project environment.
3. Set the production URL in `NEXT_PUBLIC_APP_URL`.
4. Redeploy after the Supabase schema is applied.

### Supabase

- Use the generated schema to provision database tables and RLS.
- The `media-library` storage bucket is created in SQL and configured for public reads plus authenticated staff writes.
- Public contact and quote submissions rely on insert policies for `messages` and `quote_requests`.

### Resend

- Add a verified sender before enabling live email delivery.
- Update `NOTIFICATION_EMAIL` to route internal alerts to your operations inbox.

## Project structure

```text
app/
  api/
  blog/
  contact/
  dashboard/
  login/
  portfolio/
  quote/
  services/
components/
  dashboard/
  layout/
  marketing/
  shared/
  ui/
lib/
store/
supabase/
```

## Validation

```bash
npm run lint
npm run build
```
