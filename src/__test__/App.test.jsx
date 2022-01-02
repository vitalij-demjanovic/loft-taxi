const person = {
    name: 'Maksim'
}

describe('tested object', () => {
    it('should have some field', () => {
        expect(person.name).toBeTruthy()
    })
})
