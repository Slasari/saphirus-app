import { supabaseFromToken } from "@/app/lib/supabasefromtoken";
import { NextRequest, NextResponse } from "next/server";

export default async function POST (req: NextRequest) {
    try{
        const {imageBase64, fileName} = req.body
        const base64Data = imageBase64.split(',')[1]
        const buffer = Buffer.from(base64Data, 'base64')
        const { supabase, error: tokenError, user } = await supabaseFromToken(req);
        const {data, error} = await supabase?.storage.from('product_images').upload(fileName, buffer, {contentType: 'image/png', upsert: true})
        if(error){
            throw error
        }
        const {data: publicData} = supabase?.storage.from('product_images').getPublicUrl(fileName)
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