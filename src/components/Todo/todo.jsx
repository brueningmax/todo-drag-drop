import SVG from '../../assets/icons/sticky-note.svg'
import Tooltip from '../Containers/Tooltip/tooltip'

export default function Todo({ todo }) {

    const divStyling = "flex w-full justify-between text-sm "

    const colors = {
        Löhne: 'bg-urgent',
        Hoch: 'bg-high',
        Mittel: 'bg-medium',
        Niedrig: 'bg-low',
    }

    return (
        <div className='pb-2.5'>
            <div className="flex flex-col bg-white hover:bg-lightGray items-center shadow overflow-hidden rounded-md mr-1.5">
                <div className={`flex ${colors[todo.priority]}  w-full px-1.5`}>
                    <span className="text-white">
                        {todo.priority}
                    </span>
                </div>
                <div className="px-1.5 w-full">
                    <div className={divStyling}>
                        <span>Kunde:</span>
                        <span>{todo.customer.name}</span>
                    </div>
                    <div className={divStyling}>
                        <span>Auftrag</span>
                        <span>{todo.type}</span>
                    </div>
                    <div className={divStyling}>
                        <span>Zeitraum</span>
                        <span>{todo.timeframe}</span>
                    </div>
                    <div className={divStyling + " items-center"}>
                        <span>Status</span>
                        <div className="w-2.5 h-2.5 bg-urgent rounded-full ml-auto mr-1"></div>
                        <span>{todo.status}</span>
                    </div>
                </div>
                {todo.note &&
                    <div className={divStyling + "p-1.5"}>
                        <span>Bemerkung</span>
                        <div className='group'>
                            <img src={SVG} className=' w-4 cursor-help tooltip' />
                            <div className='hidden group-hover:block absolute  drop-shadow-xl'>
                                <Tooltip  text={todo.note}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}