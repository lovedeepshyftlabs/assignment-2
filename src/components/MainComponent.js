import React from 'react'
import { LeftPortion } from './LeftPortion'
import { RightPortion } from './RightPortion'

export const MainComponent = () => {
    return (
        <div className="main-container">
            <LeftPortion />
            <RightPortion />
        </div>
    )
}
