import React from 'react'

const Rightside = (props) => {

  const deleteNote = (index) => {
    const copyTask =  [...props.Task]
    copyTask.splice(index,1)
    
    props.setTask(copyTask)
   
  }


  return (
    <div className='bg-black border-2 lg:border-l-white h-screen w-1/2 flex flex-col'>
      <h1 className='text-3xl font-bold p-5 text-white'>
        Recent Notes
      </h1>
      <div className=" h-[87vh] m-auto w-[90%] overflow-scroll flex flex-wrap">
        {
          props.Task.map((items, index) => {
            return <div className="bg-gray-800 rounded-xl flex border-2 border-black w-[35vh] relative h-[40vh] m-2.5 flex-col p-2.5"
              key={index}
            >
              <div className='text-xl font-bold text-white'>{items.title}</div>
              <div className='text-sm font-medium text-gray-500'>{items.details}</div>
              <button 
              onClick={(index)=>{
                deleteNote(index)
              }}
              className='h-[30px] bg-red-500 text-white absolute bottom-3 left-10 rounded font-bold w-[70%]'
              >
                Delete
              </button>
            </div>

          })
        }


      </div>
    </div>
  )
}

export default Rightside;


// height: 20vh;
// width: 20vh;
// margin: 10px;
// display: flex;
// flex-direction: column;
// padding: 10px;