import React from 'react'

export const FootBox = (props) => {
    return (
        <>
            <h5>{props.heading}</h5>
            <ul>
                <li><a href="/">{props.list1}</a></li>
                <li><a href="/">{props.list2}</a></li>
                <li><a href="/">{props.list3}</a></li>
                <li><a href="/">{props.list4}</a></li>
            </ul>
        </>
    )
}
