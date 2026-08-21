export const MICROSOFT_REQUEST_DENIED = 'Sorry, but you were denied access to the meeting';

export const GOOGLE_REQUEST_DENIED = 'Someone in the call denied your request to join';
export const GOOGLE_REQUEST_DENIED_TEXTS = [
  GOOGLE_REQUEST_DENIED,
  'Alguien de la llamada rechazó tu solicitud para unirte',
  'Alguien rechazó tu solicitud para unirte',
];
export const GOOGLE_REQUEST_TIMEOUT = 'No one responded to your request to join the call';
export const GOOGLE_REQUEST_TIMEOUT_TEXTS = [
  GOOGLE_REQUEST_TIMEOUT,
  'Nadie respondió a tu solicitud para unirte a la llamada',
  'Niemand hat auf Ihre Teilnahmeanfrage geantwortet',
];
export const GOOGLE_LOBBY_MODE_HOST_TEXT = 'Please wait until a meeting host brings you';
export const GOOGLE_LOBBY_MODE_HOST_TEXTS = [
  GOOGLE_LOBBY_MODE_HOST_TEXT,
  'Espera a que un organizador de la reunión te permita participar',
  'Bitte warten Sie, bis Sie vom Organisator',
];

export const ZOOM_REQUEST_DENIED = 'You have been removed';

export function textIncludesAny(haystack: string | undefined | null, needles: readonly string[]): boolean {
  if (!haystack) return false;
  return needles.some((needle) => haystack.includes(needle));
}
