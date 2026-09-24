// src/lib/api.ts
export interface LeadPayload {
  full_name: string;
  email: string | null;
  phone: string;
  property_address: string;
  property_address_2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  message: string | null;
  sms_opt_in: boolean;
  source: string;
}

export async function submitLead(data: LeadPayload) {
  const response = await fetch(
    import.meta.env.VITE_BACKEND_API_URL + '/leads',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to submit lead');
  }

  return response.json();
}
