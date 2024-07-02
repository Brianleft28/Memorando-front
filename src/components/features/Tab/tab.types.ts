import type { SvelteComponent } from "svelte";

/**
 * @type interface
 */

export interface TabItem {
  id: string;
  title: string;
  content: new (...args: any) => SvelteComponent;
}
