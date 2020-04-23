import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import cn from 'classnames'

class TabPannel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render(){
        const {
            scroll,
            children
        } = this.props
        return <div className={cn('tab')}>
            <div className={cn('tab-navbar')}>
                <nav className={cn('tab-navbar-nav')}>
                    <ul className={cn('tab-navbar-nav-ul')}>
                        <li className={cn('tab-navbar-nav-li')}>
                            <button className={cn('tab-navbar-nav-li-btn')}></button>
                        </li>
                        <li className={cn('tab-navbar-nav-li')}>
                            <button className={cn('tab-navbar-nav-li-btn')}></button>
                        </li>
                    </ul>
                </nav>
                <div className={cn('tab-panel')}>
                    <div className={cn('tab-panel-scroll',{
                        'scrollY': scroll === 'Y' || scroll === true,
                        'scrollX': scroll === 'X' || scroll === true
                    })}>
                        <div className={cn('tab-panel-scroll-connect')}></div>
                    </div>
                    <div className={cn('tab-panel-scroll')}>
                        <div className={cn('tab-panel-scroll-connect')}></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect(TabPannel)