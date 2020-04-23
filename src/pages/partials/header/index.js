import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import cn from 'classnames'
import {Dropdown} from '@base/components'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log('Icon.ViewModel',Icon.ViewModel)
        return <header className={cn('d-flex flex-shrink-0','header')}>
                <div className={cn('h-100 flex-shrink-0','header-brand')}>
                    <Icon.Logo/>
                </div>
                <div className={cn('d-flex flex-column justify-content-center flex-shrink-0 p-2','header-title')}>
                    <h1>Untitled Project</h1>
                    <h2>Initial Revision</h2>
                </div>
                <div className={cn('d-flex justify-content-center align-items-center flex-grow-1','header-toolbar')}>
                    <div className={cn('d-flex align-items-center justify-content-center flex-grow-1','header-toolbar-diagrambar')}>
                        <button type="button"><Icon.BackArrow/></button>
                        <button type="button"><Icon.BackArrowMirro/></button>
                        <button type="button"><Icon.Mouse/></button>
                        <button type="button"><Icon.DottedBox/></button>
                        <div className={cn('px-2','divider')}>
                            <span></span> 
                        </div> 
                        <button type="button"><Icon.ZoomReset/></button>
                        <button type="button"><Icon.ZoomFill/></button>
                        <button type="button"><Icon.AddTable/></button>
                        <button type="button"><Icon.GuideLine/></button>
                        <button type="button"><Icon.Note/></button>
                        <div className={cn('px-2','divider')}>
                            <span></span> 
                        </div> 
                        <Dropdown type="float" heading={Icon.ViewModel}>
                            <ul>
                                <li>
                                    <a>Table</a>
                                </li>
                                <li>
                                    <a>Pk/Ak</a>
                                </li>
                                <li>
                                    <a>Keys</a>
                                </li>
                                <li>
                                    <a>Columns</a>
                                </li>
                                <li>
                                    <a>Descriptions</a>
                                </li>
                            </ul>
                        </Dropdown>
                        <div className={cn('px-2','divider')}>
                            <span></span> 
                        </div> 
                        <Dropdown type="float" heading={Icon.AutoLayout} className='disabled'>
                        </Dropdown>
                        
                    </div>
                    <div className={cn('d-flex justify-content-end align-items-center flex-shrink-0 px-3','header-menu')}>
                        <div className={cn('d-flex align-items-center')}>
                            <button type="button"><Icon.Export/></button>
                        </div>
                        <div className={cn('d-flex align-items-center')}>
                            <button type="button"><Icon.Share/></button>
                        </div>
                        <button className={cn('dropdown-box')} type="button">
                            <span>Save</span>
                        </button>
                        <button type="button"><Icon.RevertChanges/></button>
                        <button className={cn('dropdown-box')} type="button">
                            <span>wi</span>
                        </button>
                    </div>
                    <div className={cn('flex-shrink-0','header-asidebtn')}>
                        <button className={cn({
                            'active': this.props.rightAside
                        })} onClick={()=>{
                            const toggleRightAside = !this.props.rightAside
                            store.dispatch({
                                type: 'rightAside',
                                rightAside: toggleRightAside
                            })
                            console.log(store.getState())
                        }} type="button">
                            <Icon.SettingButton/>
                        </button>
                    </div>
                </div>
            </header>
    }
}
export default connect(Header)