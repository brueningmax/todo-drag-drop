import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import View from '../../../assets/icons/view.svg'
import api from '../../../axios'
import { setTodos } from '../../../Redux/Slices/todosSlice'



export default function TodoDetailsOverlay({ todo, exitFunction }) {
    console.log(todo)
    const dispatch = useDispatch()
    const [clientDetails, setClientDetails] = useState(false)
    const token = useSelector(store => store.user.token)
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

    const priorities = {
        salary: { name: 'Löhne', color: 'bg-urgent' },
        high: { name: 'Hoch', color: 'bg-high' },
        medium: { name: 'Mittel', color: 'bg-medium' },
        low: { name: 'Niedrig', color: 'bg-low' },
    }
    const status = {
        open: { name: 'Unbearbeitet', color: 'bg-urgent' },
        inProcess: { name: 'In Bearbeitung', color: 'bg-medium' },
        completed: { name: 'Abgeschlossen', color: 'bg-low' }
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

    const updateTodoHandler = async (status) => {
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            };
            let data = {
                status: status
            }
            const response = await api.patch(`todos/${todo.id}`, data, config)
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
            <div className={`flex ${priorities[todo.priority].color}  w-full px-16 rounded-t-md`}>
                <span className="text-white text-xl">
                    {priorities[todo.priority].name}
                </span>
                <div className="flex w-full justify-between items-center text-sm">
                    <div className={`w-2.5 h-2.5 ${status[todo.status].color} rounded-full ml-auto mr-1 border-[#0000004F] border`}></div>
                    <span className="text-white">{status[todo.status].name}</span>
                </div>
            </div>
            <div className="overlay py-1.5">
                <p className="text-xl">{todo.type}</p>
                <div className="flex w-full justify-between ">
                    <p >Kunde: {todo.client.name} </p>
                    <button className="w-8 px-1 rounded-md border border-darkGray" onClick={() => setClientDetails(!clientDetails)}>
                        <img src={View} className='' />
                    </button>
                </div>
                {clientDetails && <>
                    <div className="w-full flex-col items-start">
                        <p className="text-left">Adresse:</p>
                        <p className="text-left">{todo.client.address}</p>
                    </div>
                    <div className="w-full flex-col items-start">
                        <p className="text-left">Ansprechpartner: {todo.client.contact}</p>
                        <p className="text-left">{todo.client.contact}</p>
                    </div>
                </>

                }
                <p>Zeitraum: {months[todo.month]} {todo.year}</p>
                <p>{todo.notes}</p>
                <p>Status ändern:</p>
                <button onClick={e => updateTodoHandler('open')} className="btn mx-auto w-60 bg-low text-white bg-urgent hover:bg-highlight_urgent">Unbearbeitet</button>
                <button onClick={e => updateTodoHandler('inProcess')} className="btn mx-auto w-60 bg-low text-white bg-medium hover:bg-highlight_medium">In Bearbeitung</button>
                <button onClick={completeTodoHandler} className="btn mx-auto w-60 bg-low text-white hover:bg-highlight_low">Abgeschlossen</button>
            </div>
        </div>
    )
}