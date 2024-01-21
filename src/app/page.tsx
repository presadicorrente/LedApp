'use client'
import React, { useState } from 'react';



export default function Home() {
  const [isOn, setIsOn] = useState(false);

  async function res(){
    //fetch della get per capire lo stato del led
    const res = await fetch("https://esp32-jj7p.onrender.com/getAll", {method : 'GET'})
    let data = await res.json();
    console.log(JSON.stringify(data))
    //cambio della variabile dello stato del led 
    let primoled = data[0]
    if(primoled.status) primoled.status = false
    else primoled.status = true
    console.log("primo led "+ JSON.stringify(primoled))
    //fetch della post per cambiare lo stato del led nel db
    const resPut = await fetch("https://esp32-jj7p.onrender.com/modifyExe", 
      {method: 'POST', 
      headers: {'Content-Type': 'application/json;charset=utf-8'},
       body: JSON.stringify(primoled)
      })
    //spoiler funziona
    setIsOn(primoled.status);
    console.log(resPut)
  }

    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center"  >
        <h1 className='text-white text-center text-4xl m-5'>
          Esp32 si connette ad un server 
        </h1>
        <h1 className='text-white text-center text-4xl m-5'>
          riesco a comandare il led da tutte le parti del mondo
        </h1>
        <button className="p-3 w-1/2 m-3 text-4xl text-center rounded-md bg-white hover:bg-gray-100" onClick={res}>{isOn ? 'Spegni' : 'Accendi'}</button>
      </div>
    )
}
