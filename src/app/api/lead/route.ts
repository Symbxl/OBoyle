import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
  captchaToken?: string;
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, service, captchaToken } = body;
  if (!name || !email || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields: name, email, phone, service." }, { status: 400 });
  }

  // Verify hCaptcha when a token is supplied. (Forms that include the widget
  // gate submission on the token client-side; the API enforces validity.)
  const secret = process.env.HCAPTCHA_SECRET;
  if (captchaToken) {
    if (!secret) {
      return NextResponse.json({ error: "Captcha not configured on server." }, { status: 500 });
    }
    const verifyRes = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: captchaToken })
    });
    const verify = (await verifyRes.json()) as { success?: boolean };
    if (!verify.success) {
      return NextResponse.json({ error: "Captcha verification failed." }, { status: 400 });
    }
  }

  // TODO: forward to CRM / email
  console.log("[lead]", { ...body, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
