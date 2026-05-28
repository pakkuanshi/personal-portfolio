import { NextResponse } from "next/server";

type ResumeLanguage = "en" | "cn";

export const runtime = "nodejs";

const resendEndpoint = "https://api.resend.com/emails";
const resumeLinks: Record<ResumeLanguage, string> = {
  cn: "/resume-cn.pdf",
  en: "/resume-en.pdf",
};

function isResumeLanguage(value: unknown): value is ResumeLanguage {
  return value === "en" || value === "cn";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getResumeLabel(resumeLanguage: ResumeLanguage) {
  return resumeLanguage === "en" ? "English resume" : "Chinese resume";
}

function buildEmailBody(resumeUrl: string, resumeLanguage: ResumeLanguage) {
  const resumeLabel = getResumeLabel(resumeLanguage);

  return {
    html: `
      <div style="font-family: Arial, sans-serif; color: #1f1f1f; line-height: 1.6;">
        <p>Hello,</p>
        <p>Thank you for your interest in my work. You can view and download my ${resumeLabel} using the link below:</p>
        <p><a href="${resumeUrl}" style="color: #1f1f1f;">${resumeUrl}</a></p>
        <p>Best,<br />Kristy Shi</p>
      </div>
    `,
    text: [
      "Hello,",
      "",
      `Thank you for your interest in my work. You can view and download my ${resumeLabel} using the link below:`,
      resumeUrl,
      "",
      "Best,",
      "Kristy Shi",
    ].join("\n"),
  };
}

async function readResendError(response: Response) {
  const fallbackMessage = `Resend request failed with status ${response.status}.`;

  try {
    const text = await response.text();

    if (!text) {
      return fallbackMessage;
    }

    const data = JSON.parse(text) as {
      error?: string | { message?: string };
      message?: string;
      name?: string;
    };

    if (typeof data.error === "object" && data.error?.message) {
      return data.error.message;
    }

    if (typeof data.error === "string") {
      return data.error;
    }

    return data.message ?? data.name ?? text;
  } catch {
    return fallbackMessage;
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    console.error("[send-resume] Invalid JSON request body.", { error });

    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof payload === "object" &&
    payload !== null &&
    "email" in payload &&
    typeof payload.email === "string"
      ? payload.email.trim()
      : "";

  const resumeLanguage =
    typeof payload === "object" && payload !== null && "resumeLanguage" in payload
      ? payload.resumeLanguage
      : undefined;

  console.error("[send-resume] Incoming request.", {
    emailReceived: Boolean(email),
    hasApiKey: Boolean(process.env.RESEND_API_KEY),
    resumeLanguage,
  });

  if (!isValidEmail(email) || !isResumeLanguage(resumeLanguage)) {
    console.error("[send-resume] Invalid request fields.", {
      emailReceived: Boolean(email),
      isValidEmail: isValidEmail(email),
      isValidResumeLanguage: isResumeLanguage(resumeLanguage),
      resumeLanguage,
    });

    return NextResponse.json(
      {
        error:
          "Invalid resume request. Expected email and resumeLanguage with value en or cn.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[send-resume] Missing RESEND_API_KEY.", {
      hasApiKey: false,
    });

    return NextResponse.json(
      { error: "Resume email service is not configured." },
      { status: 500 },
    );
  }

  const resumeUrl = new URL(resumeLinks[resumeLanguage], request.url).toString();
  const emailBody = buildEmailBody(resumeUrl, resumeLanguage);

  console.error("[send-resume] Prepared resume email.", {
    hasApiKey: true,
    resumeLanguage,
    resumeUrl,
  });

  let resendResponse: Response;

  try {
    resendResponse = await fetch(resendEndpoint, {
      body: JSON.stringify({
        from: "Kristy Shi <onboarding@resend.dev>",
        html: emailBody.html,
        subject: "Kristy Shi_Resume",
        text: emailBody.text,
        to: email,
      }),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  } catch (error) {
    console.error("[send-resume] Resend network request failed.", {
      error,
      hasApiKey: true,
      resumeLanguage,
      resumeUrl,
    });

    return NextResponse.json(
      { error: "Resend network request failed." },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    const resendError = await readResendError(resendResponse);

    console.error("[send-resume] Resend API error.", {
      hasApiKey: true,
      resendError,
      resendStatus: resendResponse.status,
      resumeLanguage,
      resumeUrl,
    });

    return NextResponse.json(
      { error: resendError },
      { status: 502 },
    );
  }

  console.error("[send-resume] Resume email sent.", {
    hasApiKey: true,
    resumeLanguage,
    resumeUrl,
  });

  return NextResponse.json({ ok: true });
}
