// import { isEditable } from "@testing-library/user-event/dist/utils";
import { isAdult, modifyArray, sumNumbersOfArray, } from "./helpers";

// Describe=> sirve para agrupar por funcion-test
// las logicas no pueden estar dentro de un componente es muy dificil 
//testear siempre hay que sacarlo afuera
// se abre helpers, import en helpers !! 
// logica de negocio si se cambia a vue o angular se puede llevar estas frameworks porque al final ya no forma parte de react ninguna
// logica de negocio debe estar dentro de componente.

describe('modifyArray', () => {
   
    test('Should return an array', () => {
        expect(modifyArray([1, 2])).toStrictEqual([3, 4])
    })
    
    test('Should return an array with length equals to 3', () => {
        expect(modifyArray([1, 2, 3]).length).toBe(3)
        expect(modifyArray([1, 2, 3])).toContain(3)
        expect(modifyArray([1, 2, 3])).toContain(4)
        expect(modifyArray([1, 2, 3])).toContain(5)
    
    })
    

})

test('Should return an array', () => {
    expect(modifyArray([1, 2])).toStrictEqual([3, 4])
})

test('Should return an array with length equals to 3', () => {
    expect(modifyArray([1, 2, 3]).length).toBe(3)
    expect(modifyArray([1, 2, 3])).toContain(3)
    expect(modifyArray([1, 2, 3])).toContain(4)
    expect(modifyArray([1, 2, 3])).toContain(5)

})

describe ('isAdult', () => {

    test ('should return true',() => {
        expect(isAdult(18)).toBeTruthy()

    })

    test('Should return false', () => {
        expect(isAdult(15)).toBeFalsy()
    })

})

describe ('sumNumbersOfArray', () => {
    test('Should return a numbers',() => {
        expect(sumNumbersOfArray([1])).toBe(1)
    })
    test('Should throw a exception if numbers param is not an array' ,() => {
        expect(sumNumbersOfArray).toThrow('Numbers is not an array')
    })

    test('Should return 5', () => {
        expect(sumNumbersOfArray([3,2])).toBe(5)
    })
})