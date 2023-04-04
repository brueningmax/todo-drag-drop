import './App.css'
import Main from './components/Containers/Main/Main'
import Kanban from './components/Kanban/kanban'
import Overlay from './components/Overlays/BaseOverlay/baseOverlay'
import SearchBar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'

function App() {

  return (
    <div className='flex fixed top-0 left-0 w-full h-full'>
      <Sidebar />
      <Main>
        <SearchBar />
        <Kanban />
      </Main>
        
    </div>
  )
}

export default App
