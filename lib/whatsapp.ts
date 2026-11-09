// Customer ko order ke liye is number pe WhatsApp khulega.
// Format: country code (92) + number bina leading 0 ke.
export const WHATSAPP_NUMBER = "923222043700";
export const WHATSAPP_DISPLAY = "0322 2043700";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
