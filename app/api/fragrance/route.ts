import { NextRequest, NextResponse } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";
import { Fragrance } from "@/app/helpers/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const family = searchParams.get("family");
    const usage = searchParams.get("usage");
    const search = searchParams.get("search");
    const { data, error } = await supabaseService.rpc(
      "search_fragrances_filtered",
      {
        p_family: family || null,
        p_usage: usage || null,
        p_search: search || null,
      }
    );
    if (error) {
      return NextResponse.json(
        {
          error,
          message: "error en servidor",
        },
        { status: 500 }
      );
    }
    const fragranceForSelect = data.map((e: Fragrance) => ({
      value: e.id,
      label: e.name,
    }))
    console.log(data)
    return NextResponse.json(
      {
        data: data,
        message: "Exito al conseguir las fragancias",
        fragranceForSelect,
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
