import supabaseService from "@/app/lib/supabasewithouttoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const product = searchParams.get("product");
    const { data, error } = await supabaseService.rpc("get_related_products",{p_product_id: product});
    console.log("relacionadosxd", data);

    if (error) {
      return NextResponse.json(
        {
          error,
          message: "Error al conseguir los recomendados",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        data,
        message: "Exito al conseguir los recomendados",
      },
      { status: 200 }
    );
  } catch (err) {
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
