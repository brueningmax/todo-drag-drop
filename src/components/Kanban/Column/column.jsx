import { Droppable } from '@hello-pangea/dnd';
import DraggableItem from '../Item/draggableItem';
import { v4 as uuidv4 } from 'uuid';
import ColumnHead from './ColumnHead/columnHead';

export default function Column({ content, droppableId }) {

    return (
        <Droppable droppableId={`${droppableId}`}>
            {(provided, snapshot) => (
                <div className='flex flex-col flex-grow-1  bg-white rounded-2xl w-52 pb-2.5'>
                    <ColumnHead user={content.user} />
                    <ul className="overflow-y-scroll h-full scrollbar pb-2.5" {...provided.droppableProps} ref={provided.innerRef}>
                        {content.todos.map((todo, index) =>

                            <DraggableItem key={todo.id} item={todo} index={index}>
                                <div className='border-2 bg-red-500 p-2'>{todo.type}</div>
                            </DraggableItem>

                        )}
                        {provided.placeholder}
                    </ul>
                </div>
            )}
        </Droppable>
    )
}