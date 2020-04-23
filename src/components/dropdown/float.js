import React,{Component} from 'react'
import connect from '@base/redux/connect'
import cn from 'classnames'

class Float extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //create
        const dom = this.panel
        const panelHeight = dom && dom.clientHeight
        setTimeout(() => {
            dom.style.height = `${panelHeight}px` 
        }, 10);
    }
    render(){
        return <div className={cn('dropdown-float',{
            active: this.props.active
        })} ref={el=>this.panel = el} >{this.props.children}</div>  
    }
}

export default connect(Float)