import emailjs from "emailjs-com";

export function sendEmail(formData: any) {
  return emailjs.send(
    "service_76xi9wc",
    "template_ym8srm8",
    formData,
    "AgXPtJIsBeEBqKz6L"
  );
}
