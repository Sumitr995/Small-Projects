import React from 'react'
import Card from './components/Card'
import './App.css'
import openings from './components/openings.json'

const App = () => {




  return (
    <>
      <div className='parent'>
        {
          openings.map( function(e){
            return (
              <Card name={e.companyName} icon={e.companyIcon} time={e.timeOfOpening} tag1={e.tag1} tag2={e.tag2} pay={e.pay} position={e.position}/>
            )
          })
        }

      </div>
    </>
  )
}

export default App

