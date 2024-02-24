import { useState } from "react"

const Form = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [color, setColor] = useState('Green')
    const [checked, setChecked] = useState(false)


    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(name, color, checked, lastName)
    }

    const handleChange = event => {
    const {value,name,checked } = event.target

    const mapValues = {
        name: setName,
        color: setColor,
        check: setChecked,
        lastName: setLastName
    }
    if (name !== 'check'){
        mapValues[name](value)
    } else {
        mapValues[name](checked) 
    }

    }

    return <form onSubmit={handleOnSubmit} onChange={handleChange}>
        <input type="text"placeholder="Name" name = 'name'/>
        <input type="text"placeholder="Lastname" name = 'lastName'/>
        <select name = "color">
            <option>Green</option>
            <option>Red</option>
            <option>Yellow</option>
        </select>
        <input name = "check" type="checkbox"/>
        <button>enviar</button>
    </form>
}

export default Form