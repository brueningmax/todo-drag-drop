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

  const testDB = () => {

    // Open the SQLite database
    const db = new sqlite3.Database('todos.db');
    console.log(db)
    // Define the SQL query
    const query = 'SELECT * FROM client';

    // Execute the query using db.run
    db.run(query, [], (err) => {
      if (err) {
        console.error(err);
      } else {
        // Query successful, fetch the results
        db.all(query, [], (err, rows) => {
          if (err) {
            console.error(err);
          } else {
            // Print the retrieved rows
            console.log('Client table rows:');
            console.log(rows);
          }
          // Close the database connection
          db.close();
          console.log(db)
        });
      }
    });
  }

useDatabase()


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
