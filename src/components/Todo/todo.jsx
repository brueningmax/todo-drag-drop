import { useState } from 'react'
import SVG from '../../assets/icons/sticky-note.svg'
import Tooltip from '../Containers/Tooltip/tooltip'
import Overlay from '../Overlays/BaseOverlay/baseOverlay'
import TodoDetailsOverlay from '../Overlays/TodoDetailsOverlay/todoDetailsOverlay'

export default function Todo({ todo }) {

    const [detailsVisible, setDetailsVisibility] = useState(false)

    const divStyling = "flex w-full justify-between text-sm "

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

    return (
        <>
            <Overlay visibilityCondition={detailsVisible} exitFunction={setDetailsVisibility}>
                <TodoDetailsOverlay todo={todo} />
            </Overlay>
            <div className='pb-2.5' onClick={() => setDetailsVisibility(!detailsVisible)}>
                <div className="flex flex-col bg-white hover:bg-lightGray items-center shadow overflow-hidden rounded-md mr-1.5">
                    <div className={`flex ${colors[todo.priority]}  w-full px-1.5`}>
                        <span className="text-white">
                            {priorities[todo.priority]}
                        </span>
                    </div>
                    <div className="px-1.5 w-full">
                        <div className={divStyling}>
                            <span>Kunde:</span>
                            <span>{todo.client.name}</span>
                        </div>
                        <div className={divStyling}>
                            <span>Auftrag</span>
                            <span>{todo.type}</span>
                        </div>
                        <div className={divStyling}>
                            <span>Zeitraum</span>
                            <span>{todo.month} {todo.year}</span>
                        </div>
                        <div className={divStyling + " items-center"}>
                            <span>Status</span>
                            <div className={`w-2.5 h-2.5 ${statusColors[todo.status]} rounded-full ml-auto mr-1`}></div>
                            <span>{todo.status}</span>
                        </div>
                    </div>
                    {todo.notes &&
                        <div className={divStyling + "p-1.5"}>
                            <span>Bemerkung</span>
                            <div className='group'>
                                <img src={SVG} className=' w-4 cursor-help tooltip' />
                                <div className='hidden group-hover:block absolute  drop-shadow-xl'>
                                    <Tooltip text={todo.notes} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}