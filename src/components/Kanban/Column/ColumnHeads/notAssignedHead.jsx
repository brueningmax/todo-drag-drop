import SVG from '../../../../assets/icons/newTodo.svg'
import { useState } from 'react'
import Overlay from '../../../Overlays/BaseOverlay/baseOverlay'
import NewTodoOverlay from '../../../Overlays/NewTodoOverlay/newTodoOverlay'

export default function NotAssignedColumnHead({ user }) {
    const [newTodoVisibility, setNewTodoVisibility ] = useState(false)
    return (
        <div className="flex h-10 justify-between items-center w-full px-1.5">
            <p className="text-center" >
                {user.name}
            </p>
            <button className="flex justify-center items-center btn bg-lightBlue " onClick={() => setNewTodoVisibility(true)}>
                <img src={SVG} className='w-6 invert'/>
            </button>
            <Overlay visibilityCondition={newTodoVisibility} exitFunction={setNewTodoVisibility} >
                <NewTodoOverlay exitFunction={setNewTodoVisibility} />
            </Overlay>
        </div>
    )
}
