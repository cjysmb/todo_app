import React from 'react';

const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
}

const items = [
    { number: "1", title: "🇦🇷 Argentina"},
    { number: "2", title: "🤩 YASS"},
    { number: "3", title: "👩🏼‍💻 Tech Girl"},
    { number: "4", title: "💋 Lipstick & Code"},
    { number: "5", title: "💃🏼 Latina"},
]

  
  
  // The only component we'll have:
  // It will loop through the items
  // and display them.
  // For now, this is a static array.

const DragToReorderList = () => {

    
    const [dragAndDrop, setDragAndDrop] = React.useState( initialDnDState );
    const [list, setList] = React.useState( items );

    const onDragStart = (event) => {
        // It receives a DragEvent
        // which inherits properties from
        // MouseEvent and Event
        // so we can access the element
        // through event.currentTarget
      
        // Later, we'll save
        // in a hook variable
        // the item being dragged
    
        const initialPosition = Number(event.currentTarget.dataset.position);
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition, // set the draggedFrom position
            isDragging: true, 
            originalOrder: list // store the current state of "list"
        })
        event.dataTransfer.setData("text/html", '');
    }
    
    const onDragOver = (event) => {
        // It also receives a DragEvent.
        // Later, we'll read the position
        // of the item from event.currentTarget
        // and store the updated list state
      
        // We need to prevent the default behavior
        // of this event, in order for the onDrop
        // event to fire.
        // It may sound weird, but the default is
        // to cancel out the drop.
        event.preventDefault();
        // Store the content of the original list
        // in this variable that we'll update
        let newList = dragAndDrop.originalOrder;

        // index of the item being dragged
        const draggedFrom = dragAndDrop.draggedFrom; 

        // index of the drop area being hovered
        const draggedTo = Number(event.currentTarget.dataset.position); 

        // get the element that's at the position of "draggedFrom"
        const itemDragged = newList[draggedFrom];

        // filter out the item being dragged
        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        // update the list 
        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        if (draggedTo !== dragAndDrop.draggedTo){
            setDragAndDrop({
            ...dragAndDrop,
       
             // save the updated list state
             // we will render this onDrop
             updatedOrder: newList, 
             draggedTo: draggedTo
            })
        }
    }
    
    const onDrop = () => {
        // Here, we will:
        // - update the rendered list
        // - and reset the DnD state

        // we use the updater function
        // for the "list" hook
        setList(dragAndDrop.updatedOrder);

        // and reset the state of
        // the DnD
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }

    return(
        <section style={{background: 'cyan'}}>
            <ul>
                {list.map( (item, index) => {
                return(
                    <li style={{background: 'red'}}
                        key={index} 
                        draggable={true} 
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        data-position={index}>
                        <span>{item.number}</span>
                        <p>{item.title}</p>
                        <i class="fas fa-arrows-alt-v"></i>
                    </li>
                )
                })}
            </ul>
        </section>
    )
}
  
export default DragToReorderList;