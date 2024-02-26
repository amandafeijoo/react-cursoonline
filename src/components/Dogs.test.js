import { render, screen } from "@testing-library/react"
import Dog from "./Dogs"

test('Should render without errors', ()=>{
render(<Dog/>)
})
//se tiene que llamar a render y aqui hay que pasarle el componente.


test('should render a dog name', () => {
    render (<Dog name= "India" />)
    expect(screen.getByText("India")).toBeInTheDocument()  
})

test('should render a dog age name', () => {
    render (<Dog name= "India" age={7} />)
    expect(screen.getByText("India")).toBeInTheDocument()  
})

test('should render a image', () => {
    render (<Dog name= "India" age={7} img= "https://salchichascolombia.com/wp-content/uploads/2022/05/IMG_5542-1-793x1024.jpeg" />)
    expect(screen.getByRole("img").src).toBe("https://salchichascolombia.com/wp-content/uploads/2022/05/IMG_5542-1-793x1024.jpeg")  
})

test('should render a children text', () => {
    render (<Dog name= "India" age={7} img= "https://salchichascolombia.com/wp-content/uploads/2022/05/IMG_5542-1-793x1024.jpeg" >test</Dog>)
    expect(screen.getByText("test")).toBeInTheDocument()
})


// Screen sirve para buscar elementos no los importa del testing library 