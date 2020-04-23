import React,{Component} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import cn from 'classnames'
import {Header,Menu,Aside} from './pages'

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
                    <div className={cn('flex-grow-1','content-wrapper')}>
                        <div className={cn('d-flex flex-column','page-wrapper')}>
                            <div className={cn('flex-grow-1','page-wrapper-main')}></div>
                        </div>
                    </div>
                    <Aside/>
                </main>
            </div>
        </Provider>
    }
}
