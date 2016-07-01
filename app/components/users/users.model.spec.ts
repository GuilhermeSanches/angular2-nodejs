import { User } from './users.model';

describe('Names', () => {

    it('has name', () => {
        let user: User = { name: "Guilherme Sanches", address: 'Address teste', age: 22 };
        expect(user.name).toEqual('Guilherme Sanches');
    });

    it('has address', () => {
        let user: User = { name: "Guilherme Sanches", address: 'Address teste', age: 22 };
        expect(user.address).toEqual('Address teste');
    });

    it('has age', () => {
        let user: User = { name: "Guilherme Sanches", address: 'Address teste', age: 22 };
        expect(user.age).toEqual(22);
    });

    it('has age > 0', () => {
        let user: User = { name: "Guilherme Sanches", address: 'Address teste', age: 22 };
        expect(user.age > 0).toEqual(true);
    });

    it('has age < 110', () => {
        let user: User = { name: "Guilherme Sanches", address: 'Address teste', age: 22 };
        expect(user.age > 0 && user.age < 110).toEqual(true);
    });


});