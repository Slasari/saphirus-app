import { NextRequest, NextResponse } from "next/server"
import { supabaseFromToken } from "@/app/lib/supabasefromtoken";

export async function GET(req: NextRequest) {
      const { error: tokenError, user } = await supabaseFromToken(req);
      console.log({tokenError, user})
  return NextResponse.json({
   message: "hola"
  },{status: 200})
}