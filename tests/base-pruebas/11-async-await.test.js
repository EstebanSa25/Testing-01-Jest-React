import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar un Url de la imagen ', async () => {
        const resp = await getImagen();
        console.log(url);
        // expect(typeof url).toBe('string');
        // expect(resp.includes('http')).toBe(true);
        expect(res).toBe('No se encontro la imagen');
    });
});
