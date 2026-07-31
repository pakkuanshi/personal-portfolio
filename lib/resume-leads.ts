export type ResumeLead = {
  email: string;
  firstName?: string;
  lastName?: string;
  timestamp: string;
};

export function createResumeLead(input: Omit<ResumeLead, "timestamp">): ResumeLead {
  return {
    ...input,
    timestamp: new Date().toISOString(),
  };
}

export async function saveResumeLead(lead: ResumeLead) {
  const webhookUrl = process.env.RESUME_LEAD_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      body: JSON.stringify(lead),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Resume lead save failed with status ${response.status}.`);
    }
  }

  console.info("[resume-lead]", JSON.stringify(lead));
}
