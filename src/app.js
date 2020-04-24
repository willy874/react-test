import React,{Component} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import cn from 'classnames'
import {Header,Menu,Aside,DataFlowPage} from './pages'

export default class App extends Component {
    render(){
        return <Provider store={store}>
            <div className={cn('d-flex flex-column')} style={{height: '100vh'}}
            onClick={()=>{
                    if(store.getState().rightAside){
                        // store.dispatch({
                        //     type: 'rightAside',
                        //     rightAside: false
                        // })
                    }
                }
            }>
                <Header/>
                <main className={cn('flex-grow-1 d-flex')}>
                    <Menu/>
                    <DataFlowPage/>
                    <Aside/>
                </main>
            </div>
        </Provider>
    }
}
