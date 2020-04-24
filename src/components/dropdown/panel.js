import React,{Component} from 'react'
import connect from '@base/redux/connect'
import cn from 'classnames'

class Panel extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //create
        const dom = this.panel
        const panelHeight = dom && dom.clientHeight
        setTimeout(() => {
            dom.style.height = `${panelHeight}px` 
        }, 16);
    }
    render(){
        return <div className={cn('dropdown-panel',{
            active: this.props.active
        })} ref={el=>this.panel = el} >{this.props.children}</div>  
    }
}

export default connect(Panel)