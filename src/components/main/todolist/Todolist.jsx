import './todolist.scss';

function Todolist() {
    return (
        <div className="todolist">
            <div className="todolist-items">
                <ul className='todolist-items-checkbox'>
                    <li>
                        <input type="checkbox" checked={false} />
                        <label htmlFor="">Dinner</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Todolist;