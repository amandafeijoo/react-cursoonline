
// import { useEffect, useState } from "react"
// const Counter = () => {

//    const  [ count, setCount] = useState (0)
//    const [words, setWords] = useState ('')

// // este cuando queremos ver las actualizaciones
//    useEffect (() => {
//     console.log ('actualizado!')
     
//     })

// // este es cuando se destruye un componente 

//     useEffect (() => {
//         return () => console.log ('adios')
         
//         } ,[])

// // este cuando solo queremos ver una actualizacion 

//    useEffect (() => {
//     console.log ('fetching data')
     
//     } ,[])

//     const sum = () => {
//         setCount(count => count +1)
//     }

//     const minus = () => {
//         setCount (count => count -1)
//     }

//     const addWord = () => {
//         setWords(words => words + 'Mandy ')
//     } 

//     return <>
//     <h1>{count} </h1>
//     <h1>{words} </h1>
//     <button onClick={minus}>-</button>
//     <button on onClick={sum}>+</button>
//     <button on onClick={addWord}>add word</button>

//     </>
// }

// export default Counter 

// //ESTE ES EL APP.JS
// // import { useState } from 'react';
// // import './App.css';
// // import Counter from './components/Counter';

// // function App() {

// //     const  [show, setShow] = useState(true) 

// //     return (
// //       <div className="App">
// //        {show &&<Counter />}

// //         <br />
// //         <br />

// //        <button onClick={()=> setShow(!show)}>Toggle component </button>
// //       </div>
// //     );
// //   }

  
// // export default App;
