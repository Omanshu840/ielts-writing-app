import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://irbxawlkcmamgqaxiosd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyYnhhd2xrY21hbWdxYXhpb3NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5ODc2NDksImV4cCI6MjA2NzU2MzY0OX0.6AlLDVLwDTCF45KQixF7tWrLcsSNy3oGuhAwcr1UqM0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)