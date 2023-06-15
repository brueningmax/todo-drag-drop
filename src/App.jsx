import './App.css'
import Main from './components/Containers/Main/Main'
import Kanban from './components/Kanban/kanban'
import SearchBar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import Login from './components/Overlays/Login/login'
import { useEffect } from 'react'
import api from './axios'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos, testStore } from './Redux/Slices/todosSlice'

function App() {

  const dispatch = useDispatch()

  const getBoard = async() => {
    const response = await api.get('board/')
    dispatch(setTodos(response.data))
  }

  useEffect(() => {
    getBoard()
    setInterval(getBoard, 30000)
  }, [])
  
  return (
    <div className='flex fixed top-0 left-0 w-full h-full'>
      <Login/>
      <Sidebar />
      <Main>
        <SearchBar />
        <Kanban/>
      </Main>
    </div>
  )
}

export default App
