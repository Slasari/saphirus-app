import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseService: SupabaseClient = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default supabaseService;