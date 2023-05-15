declare namespace NodeJS {
  interface ProcessEnv {
    readonly HOST?: string;
    readonly PORT?: number;
  }
}
