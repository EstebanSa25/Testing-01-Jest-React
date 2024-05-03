import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('pruebas en 09-promesas', () => {
    test('debe retornar un heroe', (done) => {
        const id = 1;
        const heroe = getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
            // el done es para que espere a que se resuelva la promesa
            done();
        });
    });
    test('debe de obtener un error si heroe no existe', (done) => {
        const id = 100;
        const heroe = getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch((error) => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});
