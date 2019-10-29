import styled from 'styled-components'
import {devices} from '../../Commons/devices'

export const CardCollection = styled.div`
    display:flex;
    width:97%;
    overflow: auto;
    padding-top: 2rem;
    padding-bottom: 1rem;
    position:relative;
    margin-right:1rem;
    scrollbar-width:none;
    border-bottom:${props => `1px solid ${props.theme.header_border}`};
    &::-webkit-scrollbar{
        visibility:hidden;
    }
    
    @media ${devices.tablet}{
        width:98%;
        padding-top: 0rem;
        border-bottom:none;
    }

`;


// export const CardStart = styled.div`
//     width:2rem;
//     height:100%;
//     position:absolute;
//     left:0px;
//     filter: blur(20px);
//     opacity: 0.3;
//     background-color: white;
// `;

// export const CardEnd = styled.div`
//     width:2rem;
//     height:100%;
//     position:absolute;
//     right:0px;
//     filter: blur(20px);
//     opacity: 0.3;
//     background-color: white;

// `;

export const Card = styled.div`
    display:flex;
    text-align:left;
    padding:1rem;
    margin:1rem;
    cursor: pointer;
    background-color:${props => props.active ?
        props.theme.card_background_active : props.theme.card_background_inactive};
    width:10rem;
    height:10rem;
    flex-direction:column;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius:0.7rem;
    color:${props => props.active ?
        props.theme.card_active_font_color : props.theme.card_inactive_font_color};
`;

export const CardHeading = styled.div`
    display:flex;
    flex-direction:row;
    height:60%;
    align-items:center;
    
`;

export const CardValue = styled.div`
    font-size:4rem;
    flex:2;
    & span{
        font-size:1.5rem;
        opacity:0.7;
    }
`;

export const CardImg = styled.img`
    flex:1;
    width:90%;
`;

export const CardLabel = styled.div`
    white-space:pre;
`;

export const CardProgress = styled.div`
    margin-top:0.1rem;
    width:100%;
    height:0.3rem;
    background-color:${props => props.active ? props.theme.progress_active_background_color : props.theme.progress_inactive_background_color};
`;

export const Bar = styled.div`
    width:${props => props.progressWidth + "%"};
    height:0.3rem;
    background-color:${props => props.active ? props.theme.progress_active_color : props.theme.progress_inactive_color};
`;

