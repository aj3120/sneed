import styled from 'styled-components'
import {devices} from './devices'
export const ContentSection = styled.div`
    @media ${devices.tablet}{
        width:70%;
        float:right;
    }
`;
export const ContentImageContainer = styled.div`
        margin-left:1rem;
        margin-top:1rem;
        box-sizing:border-box;
        width:94%;
        height:20rem;
        @media ${devices.tablet}{
        width:96%;
        }
`;
export const ContentImage = styled.img`
        width:100%;
        height:100%;
        border-radius:1rem;
`;