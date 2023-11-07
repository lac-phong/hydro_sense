import React, { useState } from 'react';
import CreateButton from './CreateSheet';

export default function NameBar() {

    const [nameInput, setNameInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setNameInput(e.target.value);
    };

    return (
        <div>
            <div className='flex my-4'>
                <div className='w-1/2 mx-4 my-4'>
                    <input
                        className='text-black'
                        type="search"
                        placeholder="Name spreadsheet"
                        onChange={handleChange}
                        value={nameInput}
                    />
                </div>
                <div className='w-1/2 mx-2 my-2'>
                    <CreateButton name={nameInput}/>
                </div>
            </div>
        </div>
    )

}