import { useState, useEffect } from 'react'
import io from 'socket.io-client';

import './App.css';


const socket = io('http://localhost:8550');
function App() {

  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message)
    const clientMessage = {
      body: message,
      user: 'Me'
    }
    setData([clientMessage, ...data])

    setMessage('')
  }

  useEffect(() => {
    const recivedMessage = (message) => {
      console.log(message)
      setData([message, ...data])
    }
    socket.on('message', recivedMessage
    )
    return () => {
      socket.off('message', recivedMessage)
    }
  }, [data])
  return (
    <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
        <h1 className='text-2xl my-2'>Chat with React-Socket.io-Nodejs</h1>
        <input
          type="text"
          onChange={e => setMessage(e.target.value)}
          value={message}
          className='border-2 border-zinc-500 p-2 text-black w-full'
        />
        <ul className='h-80 overflow-auto'>
          {data.map((item, index) => (
            <li key={index} className={`text-sm rounded-md p-2 my-2 table
            ${item.user === "Me" ? "bg-green-700 ml-auto" : "bg-blue "}`}>
              <p>{item.user}: {item.body}</p>
            </li>
          ))}
        </ul>
      </form>

    </div>
  )
}

export default App
