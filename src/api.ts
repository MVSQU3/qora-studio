const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

export type ContactPayload = {
  source: string;
  nom: string;
  email: string;
  telephone?: string;
  structure?: string;
  besoin?: string;
  budget?: string;
  nda_requis?: boolean;
  message: string;
};

export async function sendContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Envoi impossible (${res.status})`);
}
