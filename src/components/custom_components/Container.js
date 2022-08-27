import React, { useState, useEffect } from 'react';
import DragDrop from './DragDrop';

const Container = ({taskHeader, task}) => {

    return (
        <section className="card">
            <div className="card-header">
                <h1>{taskHeader}</h1>
            </div>
            <div>   
                <DragDrop taskType={task} />
            </div>
        </section>
    )
}

export default Container;