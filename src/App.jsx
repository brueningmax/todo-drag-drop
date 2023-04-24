import './App.css'
import Main from './components/Containers/Main/Main'
import Kanban from './components/Kanban/kanban'
import SearchBar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import Login from './components/Overlays/Login/login'
import { useEffect, useDispatch } from 'react'
const { ipcRenderer } = window.require('electron');
import { setDB } from './Redux/Slices/generalSlice'
import useDatabase from './sqlite3/scripts'
const sqlite3 = require('sqlite3').verbose();

function App() {
  const [database, make_call] = useDatabase()

  useEffect(() => {
    console.log(database?.[0])
  }, [database])

  useEffect(() => {
    make_call()
  }, [])
  
  return (
    <div className='flex fixed top-0 left-0 w-full h-full'>
      <Login/>
      <Sidebar />
      <Main>
        <SearchBar />
        <Kanban />
      </Main>
    </div>
  )
}

export default App
