export const modifyArray = (array) => array.map(number => number +2)


export const isAdult = age => age >= 18

export const sumNumbersOfArray = numbers => {
    if (numbers && Array.isArray(numbers)){
       return numbers.reduce((prev, next) => prev + next, 0)
    }
    
  throw new Error('Numbers is not an array')
}

//los test unitarios y  como extraerle la logica a nuestros componentes //
// test de logica//

//array de numeros y que haga es sumarle 2 //
