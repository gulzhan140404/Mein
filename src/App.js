import React,{useState} from 'react'
import Form from './components/Form'
import {API,KEY} from './config/index'
import Output from './components/Output'

export default function App() {
  const [data,setData] = useState([])

  const searchGiphyByName = async(name)=>{
    const response = await fetch(API+name+KEY+'&Limit=5')
    const reguest = await response.json()
    setData(reguest.data)
  }
  return (
    <div>
      <h1>GIPHY</h1>
      <Form
        search={searchGiphyByName}
      />
     <Output
       data = {data}
     />
    </div>
  )
}