declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXTAUTH_URL: string;

    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;

    readonly JWT_SECRET: string;

    readonly MONGODB_URL: string;
    readonly NEXT_PUBLIC_API_ENDPOINT: string;
  }
}
