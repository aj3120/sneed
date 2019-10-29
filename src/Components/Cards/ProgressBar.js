import React from 'react'
import {CardProgress,Bar} from './CardStyles'

export default function(props) {
    let progressWidth=props.progress
    return(
        <CardProgress className='progressbar' active={props.active}>
                <Bar progressWidth={progressWidth} active={props.active}/>
        </CardProgress>
    )
}