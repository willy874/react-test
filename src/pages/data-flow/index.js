import React,{Component} from 'react'
import connect from '@base/redux/connect'
import store from '@base/redux/store'
import cn from 'classnames'

class DataFlowPage extends Component{
    render() {
        return <div className={cn('flex-grow-1','content-wrapper')}>
            <div className={cn('d-flex flex-column','page-wrapper')}>
                <div className={cn('flex-grow-1','page-wrapper-main')}></div>
             </div>
        </div>
    }
}


export default connect(DataFlowPage)