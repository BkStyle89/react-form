import { useState } from 'react'
const randomTitles =["titolo1", "titolo2", "titolo3", "titolo4", "titolo5"]
function App() {

const [titles, setTitle]=useState(randomTitles)
const [newTitle, setNewTitle]=useState("")
function handleSubmit(e){
e.preventDefault()
  setTitle([newTitle, ...titles])
}


  return (
    <>
      <div>
        <div className="container">
          <div className='row'>
            <div className='col'>
              <form onSubmit={handleSubmit}>
              <ul>
                <input type="text" value={newTitle}onChange={e=>{setNewTitle(e.target.value)}} placeholder='scrivi un nuovo titolo'/>
                <button>Aggiungi titolo</button>
                {titles.map((title,index)=>(
                  <li key={title+index}>{title} </li>
                ))}
              </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
