export async function fetchBcfBoardsData(): Promise<any[]> {
  const response = await fetch('https://demo6396395.mockable.io/bcf-boards');
  if (!response.ok) {
    throw new Error('Failed to fetch BCF boards data');
  }
  const data = await response.json();
  return data as any[];
}

export async function fetchPromptsData(): Promise<any[]> {
  const response = await fetch('https://demo6396395.mockable.io/prompts');
  if (!response.ok) {
    throw new Error('Failed to fetch prompts data');
  }
  const data = await response.json();
  return data as any[];
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

