import React from 'react'
import PropTypes from 'prop-types'
import { Section, SectionTitle, SectionMenu, MenuItem, MenuImg, MenuText } from './MenuStyles'
import HomeImg from '../../images/twotone-home-24px.svg'
import MachineImg from '../../images/twotone-dvr-24px.svg'
import { CSSTransition } from 'react-transition-group'
import './menu-animations.css'
function MenuSection(props) {
    const active_state = props.active_state;
    const section_title = props.section_title;
    const section_menu = props.section_submenu;
    return (
        <Section className=''>
            <SectionTitle>
                {section_title.toUpperCase()}
            </SectionTitle>
            <SectionMenu>
                {
                    section_menu.map((item) => {
                        let selected = item.title === active_state
                        return (
                            <CSSTransition in={selected} timeout={400} classNames="menulink">
                                <MenuItem key={item.title} selected={selected} onClick={() => props.onChangeMenuItem(item.title)}>
                                    <MenuImg src={item.image} />
                                    <MenuText >{item.title.toUpperCase()}</MenuText>
                                </MenuItem>
                            </CSSTransition>
                        )
                    })
                }
            </SectionMenu>

        </Section>
    )
}

MenuSection.propTypes = {
    active_state: PropTypes.string.isRequired,
    section_title: PropTypes.string.isRequired,
    submenu: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, image: PropTypes.string }))
}

MenuSection.defaultProps = {
    active_state: 'home',
    section_title: 'platform',
    section_submenu: [
        {
            title: 'home',
            image: HomeImg,
        },
        {
            title: 'machines',
            image: MachineImg,
        }
    ]
}

export default MenuSection