declare module 'vite-plugin-prerender' {
  import { Plugin } from 'vite';
  interface PrerenderOptions {
    staticDir?: string;
    routes?: string[];
    renderer?: any;
    [key: string]: any;
  }
  export default function prerender(options?: PrerenderOptions): Plugin;
}
