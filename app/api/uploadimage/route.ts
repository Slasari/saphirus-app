import { supabaseFromToken } from "@/app/lib/supabasefromtoken";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST (req: NextRequest) {
    try{
        const {imageBase64, fileName} = await req.json()
        const base64Data = imageBase64.split(',')[1]
        const buffer = Buffer.from(base64Data, 'base64')
        /* const { supabase, user } = await supabaseFromToken(req); */
       /*  console.log(user) */
        const {data, error} = await supabase?.storage.from('product_images').upload(fileName, buffer, {contentType: 'image/png', upsert: true})
        if(error){
            throw error
        }
        const {data: publicData} = supabase?.storage.from('product_images').getPublicUrl(fileName)
        console.log({data, publicData})
        return NextResponse.json({publicData}, {status: 200})
    }
    catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: err,
        message: "error en servidor",
      },
      { status: 500 }
    );
  }
}