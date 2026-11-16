import { Resend } from "resend";

const contactFields = {
  name: 120,
  email: 254,
  company: 160,
  phone: 40,
  website: 2048,
  service: 120,
  referral: 80,
  message: 3000,
};

const consultationFields = {
  name: 120,
  email: 254,
  phone: 40,
  business_name: 160,
  business_stage: 80,
  consultation_package: 120,
  consultation_fee: 40,
  consultation_duration: 40,
  help_needed: 3000,
};

function readFields(body, fieldLimits) {
  const fields = {};

  for (const [field, maxLength] of Object.entries(fieldLimits)) {
    const value = body[field];

    if (value === undefined || value === null || value === "") {
      fields[field] = "";
      continue;
    }

    if (typeof value !== "string" || value.length > maxLength) {
      return null;
    }

    fields[field] = value.trim();
  }

  return fields;
}

function hasRequiredFields(fields, requiredFields) {
  return requiredFields.every((field) => fields[field]);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please try again later.",
    });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({
      success: false,
      message: "Please submit a valid form.",
    });
  }

  const type = body.type;
  const isConsultation = type === "consultation";
  if (type !== "contact" && !isConsultation) {
    return res.status(400).json({
      success: false,
      message: "Please submit a valid form.",
    });
  }

  const fields = readFields(
    body,
    isConsultation ? consultationFields : contactFields
  );
  const requiredFields = isConsultation
    ? [
        "name",
        "email",
        "phone",
        "business_stage",
        "consultation_package",
        "help_needed",
      ]
    : ["name", "email", "message"];

  if (
    !fields ||
    !hasRequiredFields(fields, requiredFields) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  ) {
    return res.status(400).json({
      success: false,
      message: "Please check the required fields and try again.",
    });
  }

  const subject = isConsultation
    ? "New consultation request"
    : "New contact form submission";
  const confirmationPayload = {
    name: fields.name,
    formType: isConsultation ? "consultation" : "contact",
  };
  const text = Object.entries(fields)
    .filter(([, value]) => value)
    .map(
      ([field, value]) =>
        `${field.replaceAll("_", " ")}:\n${value}`
    )
    .join("\n\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Summit Valor <noreply@summitvalor.com.ng>",
      to: "hello@summitvalor.com.ng",
      replyTo: fields.email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend email delivery failed", error);
      return res.status(502).json({
        success: false,
        message: "We couldn't send your message. Please try again later.",
      });
    }

    if (isConsultation) {
      return res.status(200).json({
        success: true,
        confirmationEmailSent: false,
      });
    }

    const { error: automationError } = await resend.events.send({
      event: "summitvalor.form_submitted",
      email: fields.email,
      payload: confirmationPayload,
    });

    if (automationError) {
      console.error("Resend confirmation automation failed", automationError);
      return res.status(200).json({
        success: true,
        confirmationEmailSent: false,
        message:
          "Your message reached Summit Valor, but we couldn't send the confirmation email.",
      });
    }

    return res.status(200).json({
      success: true,
      confirmationEmailSent: true,
    });
  } catch (error) {
    console.error("Resend email delivery failed", error);
    return res.status(500).json({
      success: false,
      message: "We couldn't send your message. Please try again later.",
    });
  }
}