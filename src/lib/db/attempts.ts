import { supabase } from '@/lib/supabase'
import type { WritingAttempt } from '@/lib/types'

export async function getAttempts(): Promise<WritingAttempt[]> {
  const { data, error } = await supabase
    .from('attempts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching attempts:', error)
    return []
  }

  return data.map(attempt => ({
    ...attempt,
    taskType: attempt.task_type,
    bandScore: attempt.band_score,
    wordCount: attempt.word_count,
    timeSpent: attempt.time_spent,
    mistakes: attempt.mistates ? JSON.parse(attempt.mistakes) : [],
    date: new Date(attempt.date).toISOString()
  })) as WritingAttempt[]
}

export async function getAttemptById(id: string): Promise<WritingAttempt | null> {
  const { data, error } = await supabase
    .from('attempts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching attempt:', error)
    return null
  }

  if (!data) return null

  return {
    ...data,
    taskType: data.task_type,
    bandScore: data.band_score,
    wordCount: data.word_count,
    timeSpent: data.time_spent,
    mistakes: data.mistakes && data.mistakes.length>0 ? JSON.parse(data.mistakes) : [],
    date: new Date(data.date).toISOString()
  } as WritingAttempt
}

export async function createAttempt(attempt: Omit<WritingAttempt, 'id'>): Promise<WritingAttempt | null> {
  const { data, error } = await supabase
    .from('attempts')
    .insert({
      task_type: attempt.taskType,
      question: attempt.question,
      original: attempt.original,
      improved: attempt.improved,
      feedback: attempt.feedback,
      mistakes: attempt.mistakes,
      band_score: attempt.bandScore,
      word_count: attempt.wordCount,
      time_spent: attempt.timeSpent,
      date: attempt.date
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating attempt:', error)
    return null
  }

  return {
    ...data,
    taskType: data.task_type,
    bandScore: data.band_score,
    wordCount: data.word_count,
    timeSpent: data.time_spent,
    mistakes: data.mistakes || []
  } as WritingAttempt
}


export async function updateAttempt(id: string, updates: Partial<WritingAttempt>): Promise<WritingAttempt | null> {
  const { data, error } = await supabase
    .from('attempts')
    .update({
      ...updates,
      mistakes: updates.mistakes ? JSON.stringify(updates.mistakes) : undefined
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating attempt:', error)
    return null
  }

  return {
    ...data,
    mistakes: data.mistakes ? JSON.parse(data.mistakes) : []
  } as WritingAttempt
}

export async function deleteAttempt(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('attempts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting attempt:', error)
    return false
  }

  return true
}