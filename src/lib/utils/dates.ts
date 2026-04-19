import { formatDistanceToNow, format } from "date-fns"

/**
 * Format a date for display.
 * Recent dates show relative time ("2 min ago").
 * Older dates show localized format ("Apr 17, 2026").
 */
export function formatNoteDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffHours = diffMs / (1000 * 60 * 60)

  if (diffHours < 24) {
    return formatDistanceToNow(d, { addSuffix: true })
  }

  return format(d, "MMM d, yyyy")
}

/**
 * Format a date for journal entry titles.
 * Full format: "Thursday, April 17, 2026"
 */
export function formatJournalDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return format(d, "EEEE, MMMM d, yyyy")
}
