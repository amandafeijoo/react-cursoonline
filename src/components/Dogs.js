// como se crea un componente //

//const Dog =() => esto resgresa un JSX//

const Dog = ({name, age, img, children, colors }) => {
      
        console.log(colors)

     return <div> 
        <img src= {img} height='300px' alt= 'Luna' />
        <p> {name} </p>
        <p>{age} </p>
        <p> {children} </p>
        </div>
}


 export default Dog