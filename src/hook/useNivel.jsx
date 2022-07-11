import React from 'react'
import { useState } from 'react'

export function useNivel(){
  
  const [nivel, setNivel] = useState([]);

  return {
    nivel,
    setNivel
  };
}