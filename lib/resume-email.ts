import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  RESUME_ATTACHMENT_FILENAME,
  RESUME_EMAIL_SUBJECT,
  RESUME_PDF_PATH,
} from "@/lib/resume-assets";

const resendEndpoint = "https://api.resend.com/emails";

const resumeEmailText = [
  "Hi,",
  "",
  "Thank you for your interest.",
  "",
  "Attached is my latest resume.",
  "",
  "If you'd like to connect, feel free to reach out through LinkedIn or email.",
  "",
  "Best,",
  "Kristy Shi",
].join("\n");

const resumeEmailHtml = `
  <div style="font-family: Arial, sans-serif; color: #1f1f1f; line-height: 1.6;">
    <p>Hi,</p>
    <p>Thank you for your interest.</p>
    <p>Attached is my latest resume.</p>
    <p>If you'd like to connect, feel free to reach out through LinkedIn or email.</p>
    <p>Best,<br />Kristy Shi</p>
  </div>
`;

type SendResumeEmailInput = {
  to: string;
};

function getResumeFilePath() {
  return path.join(process.cwd(), "public", RESUME_PDF_PATH.replace(/^\/+/, ""));
}

async function getResumeAttachment() {
  const file = await readFile(getResumeFilePath());

  return {
    content: file.toString("base64"),
    filename: RESUME_ATTACHMENT_FILENAME,
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

export async function sendResumeEmail({ to }: SendResumeEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY.");
  }

  const attachment = await getResumeAttachment();
  const response = await fetch(resendEndpoint, {
    body: JSON.stringify({
      attachments: [attachment],
      from: process.env.RESEND_FROM_EMAIL ?? "Kristy Shi <resume@kristyshi.com>",
      html: resumeEmailHtml,
      subject: RESUME_EMAIL_SUBJECT,
      text: resumeEmailText,
      to,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(await readResendError(response));
  }
}
