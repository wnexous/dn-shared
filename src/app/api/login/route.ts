import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {

    const json = await request.json()
    console.log('json', json)
    return NextResponse.json({ teste: "gatin" })
}
