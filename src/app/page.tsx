'use client'

import React, { useState } from 'react';

export default function Home() {

  async function Blue(){
    //fetch della get per capire lo stato del led
    const res = await fetch("https://esp32-jj7p.onrender.com/setNewBlue", {method : 'GET'})
    let data = await res.json();
    console.log(JSON.stringify(data))
  }

  async function Red(){
    //fetch della get per capire lo stato del led
    const res = await fetch("https://esp32-jj7p.onrender.com/setNewRed", {method : 'GET'})
    let data = await res.json();
    console.log(JSON.stringify(data))
  }

return (
  <div className="h-screen bg-black flex flex-col items-center justify-center"  >
    <h1 className='text-white text-center text-4xl m-5'>
      Esp32 si connette ad un server 
    </h1>
    <h1 className='text-white text-center text-4xl m-5'>
      riesco a comandare il led da tutte le parti del mondo
    </h1>
    <button className="p-3 w-1/2 m-3 text-4xl text-center rounded-md bg-blue-500 hover:bg-gray-100" onClick={Blue}>blue</button>
    <button className="p-3 w-1/2 m-3 text-4xl text-center rounded-md bg-red-500 hover:bg-gray-100" onClick={Red}>Red</button>
  </div>
  )
}
