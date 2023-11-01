import React, { useState } from 'react';
import CreateButton from './createSheet';

export default function NameBar() {

    const [nameInput, setNameInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setNameInput(e.target.value);
    };

    return (
        <div>
            <input
                className='text-black'
                type="search"
                placeholder="Name spreadsheet"
                onChange={handleChange}
                value={nameInput}
            />
            <CreateButton name={nameInput}/>
        </div>
    )

}