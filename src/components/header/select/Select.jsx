import React from 'react';

import './select.scss';

function Select({ options, defaultValue }) {
    return (
        <select className='select'>
            <option disebled={true} value=''>{defaultValue}</option>
            {
                options.map(option =>
                    <option value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    );
}

export default Select;