import React, { useState } from 'react'

const Leftside = (props) => {
  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')

  

    const submitHandler = (e) => {
    e.preventDefault()
    

    props.setTask(prev => [...prev,{title:Title, details:Details}])
    setTitle('')
    setDetails('')
  };
  
  return (
    <div className='bg-black h-screen w-1/2 flex flex-col text-white'>
      <h1 className='text-3xl font-bold p-5'>Add Notes</h1>
      <div className=''>
        <form className='flex flex-col items-center'
          onSubmit={
            (e) => {
              submitHandler(e)
            }
          }
        >
          {/* Input 1 */}
          <input
            className='border-white border-2 m-2.5 p-2.5 font-bold w-2/3 h-10'
            type="text"
            placeholder='Add Title'
            value={Title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          {/* Input 2 */}
          <input className='border-white border-2 m-2.5 font-bold w-2/3 h-20'
            type="text" placeholder='Add Details' 
            value={Details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
            />

          {/* button */}
          <button className='bg-white text-black font-bold w-2/3 h-10 border-2'>
           Add Notes
           </button>
        </form>
      </div>
    </div>
  )
}

export default Leftside;
