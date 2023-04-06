import { useState } from 'react'
import './App.css'
import Main from './components/Containers/Main/Main'
import Kanban from './components/Kanban/kanban'
import Overlay from './components/Overlays/BaseOverlay/baseOverlay'
import SearchBar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import NewUserOverlay from './components/Overlays/BaseOverlay/NewUser/newUser'

function App() {

  const [overlayVisibility, setOverlayVisibility] = useState(true)
  
  return (
    <div className='flex fixed top-0 left-0 w-full h-full'>
      <Overlay  visibilityCondition={overlayVisibility} exitFunction={setOverlayVisibility} >
        <NewUserOverlay/>
      </Overlay>
      <Sidebar />
      <Main>
        <SearchBar />
        <Kanban />
      </Main>
        
    </div>
  )
}

export default App
