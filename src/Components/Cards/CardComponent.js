import React from 'react'
import { Card, CardHeading, CardValue, CardImg, CardLabel} from './CardStyles'
import CardProgress from './ProgressBar'
import PropTypes from 'prop-types'
import placeHolderImage from '../../images/twotone-group-24px.svg'
import {CSSTransition} from 'react-transition-group'
import './cards-animations.css'

function CardComponent(props) {
    return (
        <React.Fragment>
            <CSSTransition in={props.active} timeout={400} classNames="cards" appear> 
            <Card className='card' active={props.active}>
                <CardHeading className="card-heading">
                    <CardValue className="card-value">{props.cardValue}
                        <span>{props.percentage ? '%' : ''}</span>
                    </CardValue>
                    {
                        props.image && props.image!=="" &&
                        <CardImg className="card-image" src={props.image} />
                    }
                </CardHeading>
                <CardLabel>
                    {props.cardLabel.toUpperCase()}
                </CardLabel>
                <CardProgress progress={props.progress} active={props.active}/>
            </Card>
            </CSSTransition>
        </React.Fragment>
    )
}
CardComponent.propTypes = {
    cardValue: PropTypes.number.isRequired,
    percentage: PropTypes.bool,
    image: PropTypes.string,
    active: PropTypes.bool,
    cardLabel: PropTypes.string.isRequired,
    progress: PropTypes.number
}

CardComponent.defaultProps = {
    cardValue: 0,
    percentage: false,
    image: placeHolderImage,
    active: false,
    cardLabel: "Card \nLabel",
    progress: 10
}

export default CardComponent