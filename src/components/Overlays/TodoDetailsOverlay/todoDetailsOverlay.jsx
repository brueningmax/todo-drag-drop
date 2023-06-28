import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import View from '../../../assets/icons/view.svg'
import api from '../../../axios'
import {setTodos} from '../../../Redux/Slices/todosSlice'



export default function TodoDetailsOverlay({ todo, exitFunction }) {
    console.log(todo)
    const dispatch = useDispatch()
    const [clientDetails, setClientDetails] = useState(false)
    const token = useSelector(store =>  store.user.token)
    const months = {
        jan: 'Januar',
        feb: 'Februar',
        mar: 'März',
        apr: 'April',
        may: 'Mai',
        jun: 'Juni',
        jul: 'Juli',
        aug: 'August',
        sep: 'September',
        oct: 'Oktober',
        nov: 'November',
        dec: 'Dezember'
    };
    const colors = {
        salary: 'bg-urgent',
        high: 'bg-high',
        medium: 'bg-medium',
        low: 'bg-low',
    }
    const statusColors = {
        open: 'bg-urgent',
        inProcess: 'bg-medium',
        completed: 'bg-low',
    }
    const priorities = {
        salary: 'Löhne',
        high: 'Hoch',
        medium: 'Mittel',
        low: 'Niedrig',
    }

    const completeTodoHandler = async () => {
        // e.preventDefault()
        try {
            let config = {
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`
                },
              };
            const response = await api.patch(`todos/complete/${todo.id}`, config)
            if (response.status !== 200) {
                alert('something went wrong')
            } else {
                dispatch(setTodos(response.data))
                exitFunction(false)
            }
        } catch (err) {
            console.log(err)
        }
    }
    

    return (
        <div className="overlay p-0">
            <div className={`flex ${colors[todo.priority]}  w-full px-1.5 rounded-t-md`}>
                <span className="text-white text-xl">
                    {priorities[todo.priority]}
                </span>
                <div className="flex w-full justify-between items-center text-sm">
                    <div className={`w-2.5 h-2.5 ${statusColors[todo.status]} rounded-full ml-auto mr-1`}></div>
                    <span className="text-white">{todo.status}</span>
                </div>
            </div>
            <div className="overlay p-1.5">
                <p className="text-xl">{todo.type}</p>
                <p onClick={() => setClientDetails(!clientDetails)}>Kunde: {todo.client.name}</p>
                {clientDetails && <>
                    <p>Adresse: {todo.client.address}</p>
                    <p>Ansprechpartner: {todo.client.contact}</p>
                </>

                }
                <p>Zeitraum: {months[todo.month]} {todo.year}</p>
                <p>{todo.notes}</p>
                <button onClick={completeTodoHandler} className="btn mx-auto w-60 bg-low text-white hover:bg-highlight_low">Abschliessen</button>
            </div>
        </div>
    )
}