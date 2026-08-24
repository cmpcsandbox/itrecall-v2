export const MCT_NAME = 'Colin Cussans';
export const BRAND_NAME = 'IT Recall Ltd';
export const MCT_TAGLINE = 'Build practical skills across SQL, Azure and Microsoft Fabric.';

// Verified LinkedIn Handle: colin-carlos-cussans-4b9594a
export const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/colin-carlos-cussans-4b9594a';

// Verified Transcript ID: dg96ycxe8y2em3x
export const MS_TRANSCRIPT = 'https://learn.microsoft.com/en-us/users/cussansc/transcript/dg96ycxe8y2em3x';

export const CONTACT_EMAIL = 'contactus@itrecall.com';
export const CONTACT_PHONE = '+44 7888 899541';

export function toWhatsAppPhoneE164(maybePhone: string): string {
	// WhatsApp wa.me links need digits only, in international format (no +, spaces, or separators)
	return maybePhone.replace(/[^\d]/g, '');
}

export function toWhatsAppChatLink(phoneE164Digits: string, message?: string): string {
	const base = `https://wa.me/${phoneE164Digits}`;
	if (!message) return base;
	return `${base}?text=${encodeURIComponent(message)}`;
}

export function toHttpsUrl(maybeUrl: string): string {
	const trimmed = maybeUrl.trim();
	if (!trimmed) return trimmed;
	if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
	// Handles values like "www.linkedin.com/..." and accidental "hwww..."
	const cleaned = trimmed.replace(/^h+www\./i, 'www.');
	return `https://${cleaned.replace(/^\/+/, '')}`;
}
