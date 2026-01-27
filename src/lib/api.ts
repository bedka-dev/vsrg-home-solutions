// src/lib/api.ts
export async function submitLead(data: any) {
  const response = await fetch(
    import.meta.env.VITE_BACKEND_API_URL + '/api/leads',
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
