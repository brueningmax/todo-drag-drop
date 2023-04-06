import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './Column/column';
import { fakeData } from '../../assets/fakeData';
import { v4 as uuidv4 } from 'uuid';
import SVG from '../../assets/icons/add-button.svg'


export default function Kanban() {
    const [state, setState] = useState(fakeData);


    const reorder = (list, startIndex, endIndex) => {
        const result = structuredClone(list.todos);
        const removed = result.splice(startIndex, 1)[0];
        result.splice(endIndex, 0, removed);
        return result;
    };

    const move = (source, destination, droppableSource, droppableDestination) => {
        console.log(source)
        const sourceClone = structuredClone(source);
        const destClone = structuredClone(destination);
        const [removed] = sourceClone.todos.splice(droppableSource.index, 1);

        destClone.todos.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
        console.log(result)
        return result;
    };

    function handleOnDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = source.droppableId;
        const dInd = destination.droppableId;

        console.log('info')
        console.log(state)
        console.log('sInd: ', sInd)
        console.log('dInd: ', dInd)
        console.log('info ende')
        

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = structuredClone(state);
            newState[sInd].todos = items;
            console.log(newState)
            setState(newState);
        } else {

            const result = move(state[sInd], state[dInd], source, destination);
            const newState = structuredClone(state);
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];
            setState(newState);
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd} >
            <div className='flex w-full h-full overflow-y-hidden gap-1.5'>
                {state.map((object, index) =>
                    <Column key={uuidv4()} droppableId={index} content={object} />)}
                
                <button className="flex justify-center items-center btn bg-lightBlue mt-2.5">
                    <img src={SVG} className='w-6 invert' />
                </button>
            </div>

        </DragDropContext>
    );
}
