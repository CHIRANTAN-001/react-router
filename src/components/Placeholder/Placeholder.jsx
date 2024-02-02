import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Placeholder = () => {

  const [value, setValue] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      const data = response.data
      setValue(data)
      console.log(data)
    }
    fetchData()
  }, [])
  
  const handleClick = (value) => {
    console.log('Button clicked')
    navigate(`/placeholder/${value.id}`, { state: value })
  }
  
  return (
    <>
      <h1>Placeholder</h1>
      <div>
        {value && value.map((item, id) => (
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}} key={id}>
            <h4>{item.title}</h4>
            <button style={{backgroundColor: "#000000", color: '#ffffff'}} onClick={() => handleClick(item)}>Click Me</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Placeholder