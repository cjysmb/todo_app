import React, { useEffect, useState, useRef } from 'react';
import taskServices from '../../api/taskServices';

const DragDrop = ({taskType}) => {

    const borderFormat = {
        'todo': '8px solid yellow',
        'doing': '8px solid #F5922F',
        'done': '8px solid #1DD28B'
    }

    const [list, setList] = useState([]);

    const dragItem = useRef();
    const dragOverItem = useRef();
    
    const dragStart  = (e, position) => {
        dragItem.current = position;
        e.dataTransfer.setData("text", e.target.id)
    }
    
    const dragEnd = (e, position) => {
        const copyListItems = [...list];
        let dragItemContent = copyListItems[dragItem.current]
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }
    
    const drop = (e) => {
        e.preventDefault();
        let element = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(element));

        
        updateData(e.target.id, element)

    }



    const updateData = async (type, id) => {
        try {
            let data = await getData("id", id);
            
            console.log(data[0])
            
            data = {
                id,
                title: data[0].title,
                content: data[0].content,
                type
            }

        
            let response = await taskServices.updateTask(data);
            window.location.reload()
        }

        catch (e) {
            console.log(e)
        }
    }


    const getData = async (getType, value) => {
        try {
            let response = await taskServices.getData(getType, value)
            if(getType === 'type') {
                setList(response)
            }

            else {
                return response
            }
        }   

        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData('type', taskType)
    }, [taskType])

    return (
        <div id={taskType} style={{height: '100vh'}} onDrop={(e) => drop(e)} onDragOver={onDragOver}>
            <ul className="list-none" id={taskType}>
                {list && list.map ((item, index) => {
                    return(
                        <li className="task-card"
                            id={item.id}
                            style={{borderLeft: borderFormat[`${taskType}`]}}
                            key={index}
                            data-position={index}
                            draggable={true}
                            onDragStart={(e) => dragStart(e, index)}
                            onDragOver={onDragOver}
                            onDragEnd={dragEnd}
                            onDrop={(e) => null}
                        >
                            
                            <div className="list-title">
                                {item.title}
                            </div>
                            <div className="list-content">
                                {item.content}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DragDrop;