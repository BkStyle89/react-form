import { useState } from 'react'
const randomTitles =["titolo1", "titolo2", "titolo3", "titolo4", "titolo5"]
function App() {

const [titles, setTitle]=useState(randomTitles)


  return (
    <>
      <div>
        <div className="container">
          <div className='row'>
            <div className='col'>
              <ul>
                {titles.map((title,index)=>(
                  <li key={title+index}>{title} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
