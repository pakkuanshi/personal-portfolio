import { NextResponse } from "next/server";

import { RESUME_PDF_PATH } from "@/lib/resume-assets";
import { sendResumeEmail } from "@/lib/resume-email";
import { createResumeLead, saveResumeLead } from "@/lib/resume-leads";

export const runtime = "nodejs";

const invalidEmailMessage = "Please enter a valid email address.";
const genericErrorMessage = "Something went wrong. Please try again.";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getStringField(payload: unknown, key: string) {
  if (typeof payload === "object" && payload !== null) {
    const value = (payload as Record<string, unknown>)[key];

    if (typeof value === "string") {
      return value.trim();
    }
  }

  return "";
}

function getOptionalName(payload: unknown, key: string) {
  const value = getStringField(payload, key)
    .replace(/\s+/g, " ")
    .slice(0, 80);

  return value || undefined;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    console.error("[send-resume] Invalid JSON request body.", { error });

    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = getStringField(payload, "email").toLowerCase();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: invalidEmailMessage }, { status: 400 });
  }

  const lead = createResumeLead({
    email,
    firstName: getOptionalName(payload, "firstName"),
    lastName: getOptionalName(payload, "lastName"),
  });

  try {
    await saveResumeLead(lead);
    await sendResumeEmail({ to: email });

    return NextResponse.json({
      ok: true,
      resumeUrl: RESUME_PDF_PATH,
    });
  } catch (error) {
    console.error("[send-resume] Resume request failed.", {
      email,
      error,
      timestamp: lead.timestamp,
    });

    return NextResponse.json({ error: genericErrorMessage }, { status: 502 });
  }
}
