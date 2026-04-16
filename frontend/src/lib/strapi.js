export const STRAPI_URL = 'http://localhost:1337';

/**
 * Generic fetch helper for Strapi
 */
export async function fetchStrapi(endpoint, options = {}) {
  try {
    const url = `${STRAPI_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
    const res = await fetch(url, options);
    if (!res.ok) {
      console.error(`[Strapi API] Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error(`[Strapi API] Connection error fetching ${endpoint}:`, error);
    return null;
  }
}

/**
 * Fetches a single program by its documentId from Strapi
 */
export async function getProgram(documentId) {
  const json = await fetchStrapi(`api/programs/${documentId}?populate=image`);
  return json?.data ?? null;
}

/**
 * Dynamically finds a program by its slug-ified title
 * Useful for individual pages that want to avoid hardcoded IDs
 */
export async function getProgramBySlug(slug) {
  const json = await fetchStrapi('api/programs?populate=image');
  if (!json?.data) return null;

  return json.data.find(p => {
    const generatedSlug = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    return generatedSlug === slug;
  }) || null;
}
