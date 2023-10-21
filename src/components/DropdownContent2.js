import React from 'react'

export const DropdownContent2 = ({ id, value, count }) => {
    return (
        <li>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>{value}</label>
            <strong className="cnt">
                <h5>{count}</h5>
            </strong>
        </li>
    )
}
