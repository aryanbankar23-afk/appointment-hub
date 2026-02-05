import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://awnfbddncjnwzkxujrdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bmZiZGRuY2pud3preHVqcmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NzIyNTAsImV4cCI6MjA4NTI0ODI1MH0.KfDyIrTiAHDQII6vcEK_ua735zWZovztCTN77dgXf-M' 

export const supabase = createClient(supabaseUrl, supabaseKey)