import React from 'react'

export const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-content">
                <h2 className="breadcrumbs-item1">Men's wear</h2>
                <ul className="breadcrumbs-item2">
                    <li className="bc-home"><a href="/home">Home</a></li>
                    <li className="bc-library"><a href="/library">Library</a></li>
                    <li className="bc-data"><a href="/data">Data</a></li>
                </ul>
            </div>
        </div>
    )
}
