import React, { useState } from 'react'
import {
    MenuButton, MenuButtonSmallLine, MenuButtonBigLine, MenuList, TopBar,
    TopBarTitle, MenuListLeft, LeftMenu, MenuBottom, BottomImg, BottomText
} from './MenuStyles'
import MenuSection from './MenuSections';
import { menuConfig } from './MenuConfig';
import { CSSTransition } from 'react-transition-group'
import './menu-animations.css'
import Logo from '../../images/Logo Pixel.svg'
export default function (props) {
    const [menuToggler, setMenuToggler] = useState('closed')
    const [activeItem, setActiveMenuItem] = useState('home')

    function onChangeMenuItem(title) {
        setActiveMenuItem(title)
    }
    function buttonClick() {
        let buttonStatus = menuToggler === 'opened' ? 'closed' : 'opened';
        setMenuToggler(buttonStatus)
    }
    return (
        <React.Fragment>
            <TopBar>
                <MenuButton className='menu-button' onClick={buttonClick}>
                    <MenuButtonBigLine menuToggler={menuToggler} />
                    <MenuButtonSmallLine menuToggler={menuToggler} />
                </MenuButton>
                <TopBarTitle>
                    DASHBOARD
                </TopBarTitle>
            </TopBar>

            {
                <React.Fragment>
                    <CSSTransition in={menuToggler === 'opened'} unmountOnExit timeout={200} classNames="menuItems">

                        <MenuList>
                            {
                                menuConfig.map((section) => (
                                    <MenuSection key={section.title} section_title={section.title} onChangeMenuItem={onChangeMenuItem}
                                        section_submenu={section.submenu} active_state={activeItem} />
                                ))
                            }
                        </MenuList>
                    </CSSTransition>
                </React.Fragment>
            }
            <LeftMenu>
                <React.Fragment>
                    <CSSTransition in={true} timeout={200} classNames="menuItems" appear>
                        <React.Fragment>
                            <MenuListLeft>
                                {
                                    menuConfig.map((section) => (
                                        <MenuSection key={section.title} section_title={section.title} onChangeMenuItem={onChangeMenuItem}
                                            section_submenu={section.submenu} active_state={activeItem} />
                                    ))
                                }
                            </MenuListLeft>
                            <MenuBottom>
                                <BottomImg src={Logo} />
                                <BottomText>FANCY PIXEL</BottomText>
                            </MenuBottom>
                        </React.Fragment>

                    </CSSTransition>

                </React.Fragment>
            </LeftMenu>

        </React.Fragment>

    )
}