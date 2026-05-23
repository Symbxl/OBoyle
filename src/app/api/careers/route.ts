import { NextResponse } from "next/server";

type Application = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  position?: string;
  employmentType?: string;
  experience?: string;
  driversLicense?: string;
  skills?: string[];
  startDate?: string;
  weekendsOk?: string;
  message?: string;
  captchaToken?: string;
};

export async function POST(request: Request) {
  let body: Application;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, position, captchaToken } = body;
  if (!name || !email || !phone || !position) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, phone, position." },
      { status: 400 }
    );
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

  // TODO: forward to ATS / hiring inbox
  console.log("[careers]", { ...body, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
