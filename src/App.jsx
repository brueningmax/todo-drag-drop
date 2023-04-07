import { useState } from 'react'
import './App.css'
import Main from './components/Containers/Main/Main'
import Kanban from './components/Kanban/kanban'
import Overlay from './components/Overlays/BaseOverlay/baseOverlay'
import SearchBar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import Login from './components/Overlays/Login/login'

function App() {
  const [user, setUser] = useState('')
  
  return (
    <div className='flex fixed top-0 left-0 w-full h-full'>
      <Login user={user} submitFunction={setUser} />
      <Sidebar />
      <Main>
        <SearchBar />
        <Kanban />
      </Main>
        
    </div>
  )
}

export default App
