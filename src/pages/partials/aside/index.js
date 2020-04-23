import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import {Dropdown} from '@base/components'
import cn from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group'

class Aside extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        const rightAside = this.state.rightAside.concat([
          prompt('')
        ])
        this.setState({rightAside: rightAside})
    }
    handleRemove(i) {
        let rightAside = this.state.rightAside.slice()
        rightAside.splice(i, 1)
        this.setState({rightAside: rightAside})
    }
    render(){
        return <CSSTransitionGroup component="aside"
            transitionName="transition"
            transitionEnterTimeout={310}
            transitionLeaveTimeout={310}
            className={cn('d-flex flex-column flex-shrink-0','aside')}>
            {(this.props.rightAside)?
            <div className={cn('card flex-grow-1','aside-card')}>
                <div className={cn('card-header','aside-card-header')}>
                    <span>DIAGRAM PROPERTIES</span>
                    <button type="button" onClick={()=>{
                            const toggleRightAside = !this.props.rightAside
                            store.dispatch({
                                type: 'rightAside',
                                rightAside: toggleRightAside
                            })
                            console.log(store.getState())
                        }}>
                        <Icon.DoubleArrowLeft/>
                    </button>
                </div>
                <div className={cn('card-body','aside-card-panel')}>
                    <div className={cn('d-flex flex-column','aside-card-panel-scroll')}>
                        <div className={cn('')}>
                            <Dropdown heading={'Diagram'} scroll={false}>
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                            </Dropdown>
                            <Dropdown heading={'View Mode Options'} scroll={false}>
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                            </Dropdown>
                            <Dropdown heading={'Global User Preferences'} scroll={false}>
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                            </Dropdown>
                            <Dropdown heading={'Description'} scroll={false}>
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                                Test Children<br />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            :null}
        </CSSTransitionGroup>
    }
}

export default connect(Aside)