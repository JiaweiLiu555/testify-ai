interface Fetcher { fetch(input: Request | string, init?: RequestInit): Promise<Response>; }
interface D1PreparedStatement { run(): Promise<unknown>; all(): Promise<unknown>; first(): Promise<unknown>; bind(...values:unknown[]):D1PreparedStatement; }
interface D1Database { prepare(query:string):D1PreparedStatement; batch<T=unknown>(statements:D1PreparedStatement[]):Promise<T[]>; }
declare module "cloudflare:workers" { export const env: { DB?: D1Database; ASSETS?: Fetcher; [key:string]:unknown }; }
