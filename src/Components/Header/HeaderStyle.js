import styled from 'styled-components';
import { devices } from '../../Commons/devices'

export const HeaderBar = styled.div`
    display:none;
    @media ${devices.tablet}{
        color:${props=>props.theme.header_font_color};
        margin:2rem auto;
        display:flex;
        height:5rem;
        border-radius:0.2rem;
        align-items:center;
        width:98%;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
    }
`;
export const Dashboard = styled.div`
    width: 29.5%;
    height:100%;
    display:flex;
    align-items:center;
    font-size:1.2rem;
    justify-content:center;
    border-right:${props=>`1px solid ${props.theme.header_border}`};
`;
export const DashboardInfo = styled.div`
    display:flex;
    width:70%;
`;
export const DashboardInfoBox = styled.div`
    width:10%;
    text-align:left;
    padding-left:1rem;
    padding-right:2rem;

`;
export const DashboardInfoBoxTitle = styled.div`
`;
export const DashboardInfoBoxDesc = styled.div`
    white-space:nowrap;
    opacity:0.7;
    font-size:0.9rem;
`;