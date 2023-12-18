import React, { useState } from 'react'
import CardTecnico from './CardTecnico'

const LIstTecnicos = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('tecnicos')) || [])

  console.log(list)

  return (
    <div
      className="grid place-items-center items-center justify-center w-full gap-4"
    >
      {list.length > 0 ? (
        list.map((element) => (
          <CardTecnico
            name={element.name}
            img={element.img_path}
            years={element.years}
            client:only="react"
          />
        ))
      ) : (
        <div class="text-white uppercase font-medium text-2xl text-center">
          <h2>No hay técnicos registrados.</h2>
        </div>
      )}
    </div>
  )
}

export default LIstTecnicos