import React from 'react'
import {HeaderBar,Dashboard,DashboardInfo,DashboardInfoBox,DashboardInfoBoxTitle,DashboardInfoBoxDesc} from './HeaderStyle'

const headerConfig=[
    {
        title:'PROJECT',
        desc:'Acme Corp.' 
    },
    {
        title:'DEVICE',
        desc:'Machine 313' 
    },
    {
        title:'LOCATION',
        desc:'Ferrara Italy' 
    }
]

export default function(props) {
    return(
        <HeaderBar className='header'>
            <Dashboard>
                DASHBOARD
            </Dashboard>
            <DashboardInfo>
                {
                    headerConfig.map((header)=>(
                        <DashboardInfoBox>
                            <DashboardInfoBoxTitle>{header.title}</DashboardInfoBoxTitle>
                            <DashboardInfoBoxDesc>{header.desc}</DashboardInfoBoxDesc>
                        </DashboardInfoBox>
                    ))
                }
            
            </DashboardInfo>
        </HeaderBar>
    )
}