import { NextRequest, NextResponse } from "next/server";
import { getsupabaseservice } from "../helpers/getsupabaseservice";

export async function GET (request: NextRequest) {
    const {data, message, error, status} = await getsupabaseservice(request, "fragance", "al conseguir las fragancias")
    
      return NextResponse.json({
        data, message, error
      },{status})
}