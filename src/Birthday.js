import React from 'react';
import { useState } from 'react';

import List from './List';
import Data from './Data';

export default function Birthday() {
    const [people, setPeople] = useState(Data);

    return (
        <div className='b-container'>
            <div className='b-title'> {people.length} Birthdays Today</div>
            <div className='b-content'>
                <List people={people} /> 
            </div>
            <button onClick={ ()=>{ setPeople([])}} >Clear List</button>
        </div>
    )
}
