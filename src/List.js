import React from 'react'

export default function List({people}) {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image, gender, about, email} = person;
                return <div key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>Age: {age}</p>
                        <p>Gender: {gender}</p>
                    </div>
                </div>
             })}
        </>
    )
}
