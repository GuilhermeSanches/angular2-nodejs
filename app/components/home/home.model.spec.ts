import { NameHome } from './home.model';

describe('Names', () => {
    
    it('has name', () => {
        let name: NameHome = {id: 1, name: 'Super Name'};
        expect(name.name).toEqual('Super Name');
    });

    it('has id', () => {

        let name: NameHome = {id: 1, name: 'Super Name 2'};
        expect(name.id).toEqual(1);
    });

    it('id is a number', () => {

        let name: NameHome = {id: 1, name: 'Super Name 2'};
        expect(!isNaN(name.id)).toEqual(true);
    });

});