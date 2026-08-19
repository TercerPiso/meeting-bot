const DEFAULT_GOOGLE_MEET_DISPLAY_NAME = 'Note Taker';

const RISKY_DISPLAY_NAME_PATTERNS: Array<[RegExp, string]> = [
  [/\bbot\b/gi, 'Note Taker'],
  [/\brobot\b/gi, 'Note Taker'],
];

export const getGoogleMeetDisplayName = (name?: string): string => {
  let displayName = name?.trim() || DEFAULT_GOOGLE_MEET_DISPLAY_NAME;

  for (const [pattern, replacement] of RISKY_DISPLAY_NAME_PATTERNS) {
    displayName = displayName.replace(pattern, replacement);
  }

  displayName = displayName
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();

  return displayName || DEFAULT_GOOGLE_MEET_DISPLAY_NAME;
};
