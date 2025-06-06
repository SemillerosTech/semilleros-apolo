// app/api/check-password/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const inputPassword = body.password;
  const secret = process.env.SECRET_PASSWORD;

  const success = inputPassword === secret;
  return NextResponse.json({ success });
}
