import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);  // Debugging line
console.log('Supabase Anon Key:', supabaseAnonKey);  // Debugging line

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

