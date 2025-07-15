import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';

interface SupabaseResponse {
  supabase: SupabaseClient | null;
  user: User | null;
  error: Error | null;
}

export async function supabaseFromToken(request: NextRequest): Promise<SupabaseResponse> {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return {
      supabase: null,
      user: null,
      error: new Error('Token no encontrado'),
    };
  }

  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { supabase, user, error }
  
}