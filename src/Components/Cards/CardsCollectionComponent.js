import React, { useState,useRef,createRef}from 'react'
import Card from './CardComponent'
import {CardCollection} from './CardStyles'
import { CSSTransition } from 'react-transition-group'
import './cards-animations.css'
import {cards} from './CardsConfig'


export default function (props) {
    const [selected, setSelection] = useState('a')
    const card_ref=useRef([...cards.map(()=>createRef())])
    function onSelection(card,i) {
        card_ref.current[i].current.scrollIntoView({behavior:'smooth'});
        setSelection(card.name)
    }
    return (
        <React.Fragment>
            <CSSTransition in={true} timeout={400} classNames="card-collection" appear>
                <CardCollection className="cards-collection">
                    {/* <CardStart></CardStart> */}
                    {

                        cards.map((card,i) => (
                            <div className="card-container" key={card.name} onClick={() => onSelection(card,i)} ref={card_ref.current[i]}>
                                <Card active={selected === card.name} {...card} />
                            </div>
                        ))
                    }
                    {/* <CardEnd></CardEnd> */}
                </CardCollection>
            </CSSTransition>
        </React.Fragment>
    )
}