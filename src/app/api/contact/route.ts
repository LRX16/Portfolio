import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "The message could not be read. Please try again." },
      { status: 400 }
    );
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);
  const website = clean(payload.website);

  if (website) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, message: "Please enter a name between 2 and 100 characters." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email) || email.length > 180) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json(
      { ok: false, message: "Please enter a message between 10 and 3000 characters." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        message: "Your message was validated, but email delivery is not configured yet."
      },
      { status: 202 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, message: "The message was valid, but email delivery failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true, message: "Message sent." });
}
