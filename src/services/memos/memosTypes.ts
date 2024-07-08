/**
 * Interface que define la estructura de un memo
 * @interface
 * @name Memo
 * @description Interfaz que representa un memo.
 * @property {number} id - Identificador del memo.
 * @property {number} secretaria_id - Identificador de la secretaria del memo.
 * @property {string} detalle - Detalle del memo.
 * @property {number} estado_id - Identificador del estado del memo.
 * @property {string} fecha - Fecha del memo.
 * @property {string} create_at - Fecha de creación del memo.
 
*/


export interface Memo {
    secretaria_id: number;
    detalle: string;
    estado_id: number;
    fecha: string; 
}

export type MemosFiltered = Omit<Memo, 'estado_id' | 'secretaria_id'> & {
    id: number;
    secretaria_nombre: string;
    estado_nombre: string;
}

export type MemoFiltered = Omit<Memo, 'estado_id' | 'secretaria_id'> & {
    id: number; 
    secretaria_nombre: string;
    estado_nombre: string;
}
