import type { SvelteComponent } from "svelte";

/**
 * @type interface
 */

export interface Secretaria {
  nombre: string;
}

export interface SecretariaResponse {
    fieldCount: number;
    affectedRows: number;
    insertId: number;
    info: string;
    serverStatus: number;
    warningStatus: number;
    changedRows: number;
  
}