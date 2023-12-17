import React, { useState } from 'react'
import TextField from "@mui/material/TextField";

const FormCrearTecnico = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('tecnicos')) || [])


  const [values, setValue] = useState({})

  const handleChangue  = (event) => {
    event.preventDefault()

    const {name, value} = event.target;

    setValue({...values, [name]: value} )

  }

  const handleSave = () => {    
    list.push(values)
    localStorage.setItem("tecnicos", JSON.stringify(list));
    alert('Creado correctamente.')

  }
  

  return (
    <div className="w-[350px] bg-white rounded-2xl grid place-items-center py-6 gap-4">
      <TextField
        name="name"
        onChange={handleChangue}
        label="Ingrese name:"
        variant="standard"
        client:only="react"
      />

      <TextField
        name="years"
        label="Ingrese years:"
        onChange={handleChangue}
        variant="standard"
        client:only="react"
      />

      <TextField
        name="type"
        label="Ingrese especialidad:"
        onChange={handleChangue}
        variant="standard"
        client:only="react"
      />

      <TextField
        name="img_path"
        label="Ingrese img:"
        onChange={handleChangue}
        variant="standard"
        client:only="react"
      />

      <button
        onClick={handleSave}
        className="bg-gray-700 flex flex-row py-4 px-4 w-[200px] rounded-2xl text-white uppercase font-medium shadow-2xl hover:bg-slate-500 hover:text-white justify-center"
      >Crear

      </button>

    </div>
  )
}

export default FormCrearTecnico