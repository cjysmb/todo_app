import React from 'react';
import Container from '../../components/custom_components/Container';

const Dashboard = props => {
    const todoDiv = {
        'taskHeader': 'To Do',
        'task': 'todo'
    }

    const doingDiv = {
        'taskHeader': 'Doing',
        'task': 'doing'
    }

    const doneDiv = {
        'taskHeader': 'Done',
        'task': 'done'
    }

    return(
        <div>
            <div className="container-div">
                <Container {...todoDiv} />
                <Container {...doingDiv} />
                <Container {...doneDiv} />
            </div>
        </div>
    )
}

export default Dashboard;