import type { SvelteComponent } from "svelte";

/**
 * @type interface
 */

export interface Secretaria {
  id: number;
  nombre: string;
}

export interface SqlResponse {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
}
