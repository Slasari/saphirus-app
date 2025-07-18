import { NextRequest, NextResponse } from "next/server";
import { supabaseFromToken } from "@/app/lib/supabasefromtoken";
import { getsupabaseservice } from "../helpers/getsupabaseservice";

export async function GET(request: NextRequest) {
  const {data, message, error, status} = await getsupabaseservice(request, "products", "al conseguir los productos")

  return NextResponse.json({
    data, message, error
  },{status})
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { supabase, error: tokenError, user } = await supabaseFromToken(req);
    console.log(user)
    if (!supabase || tokenError) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }
    const { data, error } = await supabase
      .from("products")
      .insert(body)
      .select("*");
      if(error){
        return NextResponse.json({
            error, message: 'Error al crear producto'
        },
        {status: 400})
      }
    return NextResponse.json({
      message: "body",
      data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err,
        message: "Error de servidor",
      },
      { status: 500 }
    );
  }
}
