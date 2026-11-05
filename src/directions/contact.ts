const WHATSAPP = '2250502836119'
export const EMAIL = 'informaland.26@gmail.com'

export const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
