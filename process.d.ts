declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXTAUTH_URL: string;

    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;

    readonly JWT_SECRET: string;

    readonly JSON_BIN_MASTER_KEY: string;
    readonly GUESTBOOK_ACCESS_KEY: string;

    readonly MONGODB_URL: string;
    readonly API_ENDPOINT: string;
  }
}
