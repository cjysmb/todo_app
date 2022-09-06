import React, { useState, useEffect } from 'react';
import DragDrop from './DragDrop';

const Container = ({taskHeader, task}) => {

    return (
        <div className="card">
            <div className="card-header">
                <h1>{taskHeader}</h1>
            </div>
            <div className="card-dnd">   
                <DragDrop taskType={task} />
            </div>
        </div>
    )
}

export default Container;