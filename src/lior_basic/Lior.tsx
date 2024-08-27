import React, { useEffect, useState } from 'react'
import { getDataAsync, selectAnimals} from './liorSlice'
import { Animal } from './Animal'
import { useAppDispatch, useAppSelector } from '../app/hooks'


const Lior = () => {
    const [desc, setDesc] = useState<string>("")
    const [kind, setKind] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const animals = useAppSelector(selectAnimals)
    const dispatch = useAppDispatch()
    

  return (
    <div>
        Name: <input></input><br></br>
        Kind: <input></input><br></br>
        Age: <input></input><br></br>
        <button>ADD</button>
        <hr></hr>
        

    </div>
  )
}

export default Lior