
/**
 * Esta función se encarga de crear una secretaria.
 * @param secretaria Objeto que representa la secretaria a crear.
 * @returns Promesa que resuelve al objeto de respuesta de la creación de la secretaria.
 */

import type {Secretaria} from './secretarias.type';

export async function createSecretaria(secretaria: Secretaria): Promise<Secretaria> {
    const url = 'http://localhost:3000/api/v1/secretarias';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(secretaria),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}, ocurrio un error al crear la secretaria`)
        }
        return await response.json()
    } catch(error) {
        console.error('Error al crear la secretaria', error)
        throw error;
    }
}



