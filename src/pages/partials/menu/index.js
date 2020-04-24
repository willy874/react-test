import React,{Component} from 'react'
import * as Icon from '@base/assets/icon'
import store  from '@base/redux/store'
import connect from '@base/redux/connect'
import cn from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            leftAside: 0,
            leftAsideComponent: '',
            leftAsideHeading: 'DIAGRAMS'
        }
    }
    render(){
        const leftTopToolbar = [{
            key: 'Diagrams',
            icon: 'Diagrams',
            component: 'Diagrams',
        },{
            key: 'DiagramExplorer',
            icon: 'DiagramExplorer',
            component: 'DiagramExplorer',
        },{
            key: 'Database',
            icon: 'Database',
            component: 'Database',
        }]
        const leftBottomToolbar = [{
            key: 'DatabaseDocument',
            icon: 'DatabaseDocument',
            component: 'DatabaseDocument',
        },{
            key: 'CompareRevisions',
            icon: 'CompareRevisions',
            component: 'CompareRevisions',
        },{
            key: 'GenerateSQL',
            icon: 'GenerateSQL',
            component: 'GenerateSQL',
        },{
            key: 'DatabaseExplorer',
            icon: 'DatabaseExplorer',
            component: 'DatabaseExplorer',
        }]
        return <div className={cn('h-100 d-flex flex-shrink-0','menubar')}>
            <div className={cn('d-flex flex-column','menubar-tab')}>
                <div className={cn('flex-grow-1','menubar-tab-panel')}>
                        <div className={cn('d-flex justify-content-between flex-column','menubar-tab-panel-scroll')}>
                            <div className={cn('menubar-tab-panel-scroll-top')}>
                                {leftTopToolbar.map(item =>{
                                    const ItemIcon = Icon[item.icon]
                            return <div key={item.key}
                                        className={cn('menubar-tab-panel-scroll-btn')}>
                                        <button className={cn({
                                            'active': this.state.leftAside === item.key
                                        })} onClick={()=>{
                                            if(this.state.leftAside === item.key){
                                                this.setState({
                                                    leftAside: 0,
                                                })
                                            }else{
                                                this.setState({
                                                    leftAside: item.key,
                                                    leftAsideComponent: `我是${item.component}組件`,
                                                })
                                            }
                                        }} type="button">
                                            <ItemIcon/>
                                        </button>
                                    </div>
                                })}
                            </div>
                            <div className={cn('menubar-tab-panel-scroll-bottom')}>
                                {leftBottomToolbar.map(item =>{
                                    const ItemIcon = Icon[item.icon]
                            return <div key={item.key}
                                        className={cn('menubar-tab-panel-scroll-btn')}>
                                        <button className={cn({
                                            'active': this.state.leftAside === item.key
                                        })} onClick={()=>{
                                            if(this.state.leftAside === item.key){
                                                this.setState({
                                                    leftAside: 0,
                                                })
                                            }else{
                                                this.setState({
                                                    leftAside: item.key,
                                                    leftAsideComponent: `我是${item.component}組件`,
                                                })
                                            }
                                        }} type="button">
                                            <ItemIcon/>
                                        </button>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <CSSTransitionGroup component="aside"
                transitionName="transition"
                transitionEnterTimeout={310}
                transitionLeaveTimeout={310}
                className={cn('d-flex','aside')}>
                {(this.state.leftAside)?
                    <div className={cn('d-flex pl-2 pb-2','menubar-content')}>
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
                                <div className={cn('card-body p-0','menubar-content-panel-card-body')}>
                                    <div className={cn('py-2 h-100','menubar-content-panel-card-body-panel')}>
                                        <div className={cn('d-flex flex-column p-2','menubar-content-panel-card-body-panel-scroll')}>
                                            {this.state.leftAsideComponent} 
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
                :null}</CSSTransitionGroup>
            </div>  
    }
}
export default connect(Menu)