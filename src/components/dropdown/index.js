import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import cn from 'classnames'
import Panel from './panel';
import Float from './float';
import { CSSTransitionGroup } from 'react-transition-group'

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            dropdownActive: false
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
      const tabPanel = this.state.tabPanel.concat([
        prompt('')
      ])
      this.setState({tabPanel: tabPanel})
    }
    handleRemove(i) {
      let tabPanel = this.state.tabPanel.slice()
      tabPanel.splice(i, 1)
      this.setState({tabPanel: tabPanel})
    }
    render(){
        const {
            scroll,
            heading,
            children,
            className
        } = this.props
        console.log('heading',heading)
        const Heading = (typeof(heading) === 'object' && heading.hasOwnProperty('WrappedComponent'))? heading : null
        const type = this.props.type || 'panel'
        console.log('this.panel render',this.panel)
        return <div className={cn('dropdown',className)}>
            <button className={cn('dropdown-btn',{
                'active': this.state.dropdownActive,
                'panel': type  === 'panel',
                'float': type  === 'float',
            })} onClick={e=>{
                this.setState({
                    dropdownActive: !this.state.dropdownActive
                })
            }}>
                {(Heading)?
                   <Heading.WrappedComponent/>
                : <span className={cn('dropdown-btn-heading')}>{heading}</span>
                }
                <i className={cn('dropdown-btn-arrow')}></i>
            </button>
            <CSSTransitionGroup
                transitionName="transition"
                transitionEnterTimeout={316}
                transitionLeaveTimeout={316}
                component="div">
                
                {(type === 'float' && this.state.dropdownActive)?
                    <Float active={this.state.dropdownActive}>
                        <div className={cn('dropdown-panel-scroll',{
                            'scrollY': scroll === 'Y' || scroll === true,
                            'scrollX': scroll === 'X' || scroll === true
                        })}>
                            <div className={cn('dropdown-panel-scroll-connect')}>
                                {children}
                            </div>
                        </div>
                    </Float>
                :undefined}

                {(type === 'panel' && this.state.dropdownActive)?
                    <Panel active={this.state.dropdownActive}>
                        <div className={cn('dropdown-panel-scroll',{
                            'scrollY': scroll === 'Y' || scroll === true,
                            'scrollX': scroll === 'X' || scroll === true
                        })}>
                            <div className={cn('dropdown-panel-scroll-connect')}>
                                {children}
                            </div>
                        </div>
                    </Panel>
                :null}
            </CSSTransitionGroup>
            
        </div>
    }
}

export default connect(Dropdown)