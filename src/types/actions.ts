/**
 * Standard return type for all Server Actions.
 * Matches Supabase's own { data, error } pattern.
 *
 * Usage:
 *   export async function createNotebook(input: CreateNotebookInput): Promise<ActionResult<Notebook>> {
 *     const { data, error } = await supabase.from('notebooks').insert(input).select().single()
 *     if (error) return { data: null, error: error.message }
 *     return { data, error: null }
 *   }
 */
export type ActionResult<T> = {
  data: T | null
  error: string | null
}
