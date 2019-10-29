import styled from 'styled-components'
import { devices } from '../../Commons/devices'

export const MenuButton = styled.div`
    width:2rem;
    height:1.4rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    cursor: pointer;
    position:absolute;
    left:3rem;
    top:50%;
    transform:translateY(-50%);
`;

export const MenuButtonSmallLine = styled.div`
    height:0.2rem;
    width:70%;
    background-color:${props => props.theme.menubutton_line_color ? props.theme.menubutton_line_color : 'black'};
    border-radius:2rem;
    transform:${props => props.menuToggler === 'opened' ? 'rotate(25deg)' : 'rotate(0deg)'};
    transition:all 300ms ease-in-out;

`;

export const MenuButtonBigLine = styled.div`
    height:0.2rem;
    width:100%;
    background-color:${props => props.theme.menubutton_line_color ? props.theme.menubutton_line_color : 'black'};
    border-radius:1rem;
    transform:${props => props.menuToggler === 'opened' ? 'rotate(-25deg)' : 'rotate(0deg)'};
    transition:all 300ms ease-in-out;
`;

export const MenuList = styled.div`
    position:absolute;
    top:3rem;
    z-index:10;
    background-color:white;
    width:100%;
    padding-left:10%;
    box-sizing:border-box;
`;

export const Section = styled.div`
    margin-top:1rem;
    text-align:left;
    color:${props => props.theme.menu_font_color ? props.theme.menu_font_color : 'black'};
`;

export const SectionTitle = styled.div`
    margin-bottom:0.5rem;
    font-size:0.7rem;
    opacity:0.7;
`;

export const SectionMenu = styled.div`
    @media ${devices.tablet}{
        font-size:1.1rem;       
    }
    font-size:1rem;   
`;
export const MenuItem = styled.div`
    display:flex;
    user-select:none;
    cursor: pointer;
    background-color:${props => props.selected ? props.theme.menu_selected_background_color : props.theme.menu_unselected_background_color};
    margin:0.3rem 1rem;
    height:2rem;
    align-items:center;
`;
export const MenuImg = styled.img`
    width:1.2rem;
    margin-right:1rem;
    margin-left:0.5rem;

`;
export const MenuText = styled.div`
    
`;
export const TopBar = styled.div`
    @media ${devices.tablet}{
        display:none;    
    }
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    position:relative;
    height:5rem;
    color:${props => props.theme.menu_font_color ? props.theme.menu_font_color : 'black'};

`;

export const TopBarTitle = styled.div`
    font-size:1.1rem;
    font-weight:600;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

export const LeftMenu = styled.div`
    display:none;
    @media ${devices.tablet}{
        display:block;   
        float:left;
        box-sizing:border-box;
        width :30%;
        border-right:${props=>`1px solid ${props.theme.header_border}`};
        padding-right:0.5%;

    }
`
export const MenuListLeft = styled.div`
    width:100%;
    margin-left:1rem;
`

export const MenuBottom = styled.div`
    margin-top:5rem;
    display:flex;
    height:5rem;
    background-color:rgba(255,255,255,0.2);
    align-items:center;
    justify-content:center;
`;

export const BottomImg= styled.img`
    width:2.5rem;
    height:2.5rem;
`;

export const BottomText= styled.div`
    font-size:1.3rem;
    margin-left:1rem;
`;