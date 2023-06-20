import './todolist.scss';

function Todolist() {
    return (
        <div className='todolist'>
            <ul className='todolist-items'>
                <li className='todolist-items-list'>
                    <input type='checkbox' checked={false} className='todolist-items-list-input' />
                    <label htmlFor='' className='todolist-items-list-label'>
                        <div className='todolist-items-list-label-text'>
                            Dinner
                            <p>20:00</p>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default Todolist;