import Todolist from './todolist/Todolist';
import ButtonAdd from '../ui/buttonAdd/ButtonAdd';

import './mainTasks.scss';

function MainTasks() {
    return (
        <main className='main'>

            <div className='main-text'>
                <h1 className='main-text-title'>Task</h1>
                <p className='main-text-subtitle'>today</p>
            </div>

            <div className="main-tasks">
                <Todolist />
            </div>
        </main>
    );
}

export default MainTasks;