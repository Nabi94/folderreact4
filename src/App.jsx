import { useState } from 'react'
import Test from './components/Test'
import Test2 from './components/Test2'
import './styles/tailwind.css'
const App = () => {

  const [activeTab,setActiveTab] = useState(0)
  const handleClick = () => {

    setActiveTab(2)
  }
  return (
    <>
    <button onClick={handleClick}> sec birini</button>
    <Test active={activeTab} set={setActiveTab}>
    
    <Test2 title='Home' >1</Test2>
    <Test2 title='About'>2</Test2>
    <Test2 title= 'Contact'>3</Test2>
    <Test2 title = 'Privacy'>4</Test2>
    <Test2 title= 'Map'>5</Test2>
    
    </Test>
    </>
  )
}
export default App