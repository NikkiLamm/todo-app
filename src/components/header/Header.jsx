import { useState } from 'react';
import { v1 } from 'uuid';

import Select from './select/Select';

import plus from './../../assets/icons/plus.svg';
import burger from './../../assets/icons/burger.svg'

import './header.scss';

function Header() {

    const [category, setCategory] = useState([
        {id: v1(), title: ''}
    ])

    return (
        <header className='header'>
            <div className='header-items'>
                <img src={burger} alt={burger} width={28} height={24} />
                <Select defaultValue='category' options={[
                    {value: ''}
                ]} />
                <img src={plus} alt={plus} width={28} height={28} />
            </div>
        </header>
    );
};

export default Header;