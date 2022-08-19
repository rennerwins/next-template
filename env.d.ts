declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PREVIEW_SECRET: string;
    }
  }
}

export {};
