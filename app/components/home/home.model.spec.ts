import { NameHome } from './home.model';

describe('Users', () => {

    it('has name', () => {
        let user: NameHome = { id: 1, name: 'Guilherme', age: 23, address: 'Av Moises Antonio, 975' };
        expect(user.name).toEqual('Guilherme');
    });

    it('has id', () => {

        let user: NameHome = { id: 1, name: 'Jéssica', age: 23, address: 'Av Moises Antonio, 975' }
        expect(user.id).toEqual(1);
    });

    it('id is a number', () => {

        let user: NameHome = { id: 1, name: 'Antônio', age: 100, address: 'Av Moises Antonio, 975' }
        expect(!isNaN(user.id)).toEqual(true);
    });

    it('age is a number', () => {

        let user: NameHome = { id: 1, name: 'Antônio', age: 100, address: 'Av Moises Antonio, 975' }
        expect(!isNaN(user.age)).toEqual(true);
    });

    it('address is not empty', () => {

        let user: NameHome = { id: 1, name: 'Antônio', age: 100, address: 'Av Moises Antonio, 975' }
        expect(user.address.length > 0 ? true : false).toEqual(true);
    });


});