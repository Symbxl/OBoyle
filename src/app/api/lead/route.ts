import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, service } = body;
  if (!name || !email || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields: name, email, phone, service." }, { status: 400 });
  }

  // TODO: forward to CRM / email
  console.log("[lead]", { ...body, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
