/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import { evolve, assoc } from 'ramda'
import NavbarDropdownUp from './NavbarDropdownUp'
import { format } from 'date-fns'

export default class NavbarBotton extends PureComponent {
    state = {
        isActive: false,
        values: {
            year: format(new Date(), 'YYYY'),
            month: format(new Date(), 'MM')
        }
    }

    render() {
        const isActive = this.state.isActive && ' is-active'

        return (
            <nav className='navbar is-light is-fixed-bottom' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a
                        role='button'
                        className={`navbar-burger burger ${isActive}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='botton-navbar'
                        onClick={() => {
                            this.setState({
                                isActive: !this.state.isActive
                            })
                        }}>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                <div id='botton-navbar' className={`navbar-menu ${isActive}`}>
                    <div className='navbar-start'>
                        <NavbarDropdownUp
                            name='year'
                            contents={['2019', '2018']}
                            selected={this.state.values.year}
                            onSelectChose={(name, value) => {
                                this.setState(evolve({
                                    values: assoc(name, value)
                                }), () => {
                                    this.props.changeDate(this.state.values)
                                })
                            }}
                        />
                        <NavbarDropdownUp
                            name='month'
                            contents={['Março', 'Abril']}
                            selected={this.state.values.month}
                            onSelectChose={(name, value) => {
                                this.setState(evolve({ values: assoc(name, value) }))
                            }}
                        />
                    </div>
                    <div className='navbar-end'>
                        <a className='navbar-item'>
                            Novo ponto
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
