// Re-export cn from its canonical location for shadcn/ui compatibility
// shadcn components import from "@/lib/utils" — this file maintains that path
export { cn } from "@/lib/utils/cn"

export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
