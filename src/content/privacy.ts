// Shown in-app at /privacy. PRIVACY.md must say the same (a test checks). The website
// (chalkmates-web repo) shows it too, from a copy: run `npm run sync:privacy` there after changing this.

export const PRIVACY_UPDATED = '7 November 2026';

export const PRIVACY_CONTACT = 'iamincontrol.dev@gmail.com';

export const PRIVACY_SECTIONS: { title: string; body: string }[] = [
  {
    title: 'What Chalkmates is',
    body: 'Chalkmates lets you share drawings, notes, photos and little check-ins with the people in your spaces. Everything you share is visible only to the members of the space you share it in.',
  },
  {
    title: 'What we store',
    body: [
      '• Your email address and password (hashed), to sign you in.',
      '• Your display name, colour, mood and profile photo, if you add one. The photo is cropped and shrunk to a small square on your phone before it’s uploaded.',
      '• A group space’s photo, if someone in it adds one. Anyone in the space can change or remove it.',
      '• What you post: messages, drawings, notes, photos, captions, reactions, nudges (and the ones you make yourself), songs, games and Draw & Guess drawings, answers to daily questions, This-or-That picks, countdowns and what you write in the space’s scratchpad.',
      '• Reports you send and people you block. A report keeps a copy of what you reported, so we can review it even if it’s deleted.',
      '• Invite links you share: which space it’s for, who made it and who used it. A link works once, for 6 hours, and its record is deleted a day after it expires, or sooner with the space or your account.',
      '• Your approximate location, only if you turn on location sharing. It is rounded to about 1 km before it is saved and cleared when you turn sharing off.',
      '• A push token for your device, so we can send notifications and refresh your widgets.',
      '• When you were last in the app, so the people in your spaces can see “Last seen”. Whether you’re in the app right now is shown to them live and never stored. Settings → Show when I’m online turns both off, and forgets when you were last in.',
      '• Nothing from a game’s chat or its emoji reactions. They go straight to the other player while you’re both playing and are never stored.',
    ].join('\n'),
  },
  {
    title: 'Who can see it',
    body: 'Only the members of the space you post in. Your name, colour, mood and profile photo are seen by everyone in your spaces, and by someone you send an invite link to. A group’s photo is seen by everyone in it and by someone it invites. Profile and group photos sit at long random links only the app knows; anyone given one could open it, until the photo is changed or removed. If someone reports something you sent, we see a copy of it to review the report. We don’t sell your data, show ads, or use analytics or tracking SDKs.',
  },
  {
    title: 'Services we use',
    body: 'Supabase hosts the database, sign-in and file storage. Firebase Cloud Messaging (Google) delivers notifications and widget updates. They process data only to provide those services. Animated emoji, and pictures of emoji your phone can’t show yet, are downloaded from Google Fonts the first time you see each one; Google sees your device’s IP address, as with any website, and nothing else. GIFs come from KLIPY, and we keep only a link to the GIFs you pick, never a copy. When you look for a GIF, KLIPY receives what you search for, a random ID for this install of the app and your phone’s country, and sees your IP address when GIFs load. Searching for a song asks Apple’s public music catalogue, which receives what you search for and your phone’s country. A Spotify link you share is looked up with Spotify to get its title and artwork.',
  },
  {
    title: 'Deleting your data',
    body: 'You can unsend a chat message. Changing or removing a profile or group photo deletes the old one, and a group’s photo goes with the space. Boards and other posts stay in the space’s history. Profile → Delete account permanently removes your account, your profile photo, messages, posts, games, Draw & Guess drawings and guesses, the files behind them, and the reports you sent or that were about you, and removes you from every space. Spaces left with no members are deleted too. A game of three or more goes on without you, and the piece you drew is taken out of it.',
  },
  {
    title: 'Children',
    body: 'Chalkmates is not meant for children under 13.',
  },
  {
    title: 'Contact',
    body: `Questions or requests: ${PRIVACY_CONTACT}`,
  },
];
