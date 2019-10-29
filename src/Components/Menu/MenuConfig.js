import HomeImg from '../../images/twotone-home-24px.svg'
import MachineImg from '../../images/twotone-dvr-24px.svg'
import ClientImg from '../../images/twotone-work-24px.svg'
import PlanningImg from '../../images/twotone-access_alarms-24px.svg'
import UsersImg from '../../images/twotone-group-24px.svg'
import ExportImg from '../../images/twotone-get_app-24px (1).svg'
import SettingsImg from '../..//images/twotone-settings-24px.svg'
import FancyImg from '../../images/twotone-memory-24px.svg'
import SpaceBunnyImg from '../../images/twotone-cloud_done-24px.svg'
import FolderImg from '../../images/twotone-folder_shared-24px.svg'

export const menuConfig=[
    {
        title:'platform',
        submenu:[
            {
                title:'home',
                image:HomeImg,
            },
            {
                title:'machines',
                image:MachineImg,
            },
            {
                title:'clients',
                image:ClientImg,
            },
            {
                title:'planning',
                image:PlanningImg,
            }
        ]
    },
    {
        title:'settings',
        submenu:[
            {
                title:'users',
                image:UsersImg,
            },
            {
                title:'export data',
                image:ExportImg,
            },
            {
                title:'settings',
                image:SettingsImg,
            }
        ]
    },
    {
        title:'advanced',
        submenu:[
            {
                title:'fancybox configs',
                image:FancyImg,
            },
            {
                title:'spacebunny status',
                image:SpaceBunnyImg,
            },
            {
                title:'shared folders',
                image:FolderImg,
            }
        ]
    }

]