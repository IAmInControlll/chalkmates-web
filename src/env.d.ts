interface ImportMetaEnv {
  /** The Chalkmates Supabase project URL (public: the app ships it too). */
  readonly PUBLIC_SUPABASE_URL: string;
  /** The project's publishable key (public by design; never the secret key). */
  readonly PUBLIC_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
