import React,{Component} from 'react'
import './main.css'

export default class ICON extends Component {
    render() {
        const { 
            className,
            style
        } = this.props
        const fill = this.props.fill || 'currentColor'
        return <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" 
            viewBox={this.config().viewBox}
            className={className} 
            style={style} 
            fill={fill}
            dangerouslySetInnerHTML={{ __html: this.path() }}
        >  
        </svg>
    }
}