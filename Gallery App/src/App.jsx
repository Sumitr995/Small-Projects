import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [Index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const res = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=12`);
    setUserData(res.data)
    setLoading(false)
  }

  let printUserData = ""

  if (UserData.length > 0) {
    printUserData = UserData.map((item, idx) => (
      <a key={idx} href={item.url} target='_blank' className='flex flex-col items-center'>
        <div className='h-[200px] w-[300px] m-5 bg-gray-600 rounded-2xl border-2 border-white hover:scale-95'>
          <img className='rounded-2xl border-2 h-full w-full object-cover' src={item.download_url} alt="img" />
        </div>
        <div className='text-white'>
          {item.author}
        </div>
      </a>
    ))
  }

  useEffect(() => {
    getData()
  }, [Index])

  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center relative'>

      <div className='h-screen w-full flex flex-wrap m-5 items-center justify-center text-white'>
        {loading ? (
          <div className="custom-loader"></div>
        ) : (
          printUserData
        )}
      </div>

      <div className='fixed bg-gray-500 h-[50px] w-[250px] flex bottom-5 rounded-xl z-1'>

        <div
          style={{ opacity: Index === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1)
              setUserData([])
            }
          }}
          className='h-[30px] w-[180px] text-[17px] font-bold flex items-center justify-center m-2.5 bg-amber-300 text-black rounded active:scale-95 cursor-pointer'
        >
          Prev
        </div>

        <div className='h-full w-[213px] flex text-[17px] font-bold items-center justify-center mx-2'>
          Page {Index}
        </div>

        <div
          onClick={() => {
            setIndex(Index + 1)
            setUserData([])
          }}
          className='h-[30px] w-[180px] text-[17px] font-bold flex items-center justify-center m-2.5 bg-amber-300 text-black rounded active:scale-95 cursor-pointer'
        >
          Next
        </div>

      </div>

    </div>
  )
}

export default App
