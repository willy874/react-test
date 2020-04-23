import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import cn from 'classnames'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            leftAside: '0'
        }
    }
    render(){
        return <div className={cn('h-100 d-flex flex-shrink-0','menubar')}>
            <div className={cn('d-flex flex-column','menubar-tab')}>
                <div className={cn('flex-grow-1','menubar-tab-panel')}>
                        <div className={cn('d-flex justify-content-between flex-column','menubar-tab-panel-scroll')}>
                            <div className={cn('menubar-tab-panel-scroll-top')}>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button className={cn({
                                        'active': this.state.leftAside
                                    })} onClick={()=>{
                                        this.setState({
                                            leftAside: '1'
                                        })
                                    }} type="button">
                                        <Icon.Diagrams/>
                                    </button>
                                </div>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.DiagramExplorer/>
                                    </button>
                                </div>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.Database/>
                                    </button>
                                </div>
                            </div>
                            <div className={cn('menubar-tab-panel-scroll-bottom')}>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.DatabaseDocument/>
                                    </button>
                                </div>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.CompareRevisions/>
                                    </button>
                                </div>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.GenerateSQL/>
                                    </button>
                                </div>
                                <div className={cn('menubar-tab-panel-scroll-btn')}>
                                    <button type="button">
                                        <Icon.DatabaseExplorer/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cn('d-flex px-2 pb-2','menubar-content')}>
                    <div className={cn('w-100 d-flex flex-column','menubar-content-panel')}>
                        <div className={cn('my-2','menubar-content-panel-header')}>
                            <span>DIAGRAMS</span>
                            <button type="button" className={cn('menubar-content-panel-header-icon')}>
                                <Icon.DoubleArrowLeft/>
                            </button>
                        </div>
                        <div className={cn('card flex-grow-1','menubar-content-panel-card')}>
                            <div className={cn('card-header p-0','menubar-content-panel-card-header')}>
                                <input type="text" className={cn('menubar-content-panel-card-header-search')} placeholder="Search"/>
                                <button type="button" className={cn('menubar-content-panel-card-header-search-icon')}>
                                    <Icon.Search/>
                                </button>
                            </div>
                            <div className={cn('card-body','menubar-content-panel-card-body')}>
                                <div className={cn('d-flex.flex-column.py-2','menubar-content-panel-card-body-panel')}>
                                    <div className={cn('d-flex.flex-column.py-2','menubar-content-panel-card-body-panel-scroll')}>
                                        這是內容
                                    </div>
                                </div>
                            </div>
                            <div className={cn('card-footer d-flex justify-content-end px-0 py-2','menubar-content-panel-card-footer')}>
                                <button type="button" className={cn('menubar-content-panel-card-footer-icon')}>
                                    <Icon.AddSubjectArea/>
                                </button>
                                <button type="button" className={cn('menubar-content-panel-card-footer-icon')}>
                                    <Icon.AddDiagram/>
                                </button>
                                <div className={cn('px-1','divider')}>
                                    <span></span> 
                                </div> 
                                <button type="button" className={cn('menubar-content-panel-card-footer-icon')}>
                                    <Icon.RubbishBin/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>  
    }
}
export default connect(Menu)