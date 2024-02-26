import { isEditable } from "@testing-library/user-event/dist/utils";
import { isAdult, modifyArray } from "./helpers";

// Describe sirve para agrupar por funcion-test

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