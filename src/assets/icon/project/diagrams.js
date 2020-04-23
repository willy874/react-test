import connect from '@base/redux/connect'
import ICON from '../icon'

class Diagrams extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M10 11h-6c-1.105 0-2 0.895-2 2v0 6c0 1.105 0.895 2 2 2v0h6c1.105 0 2-0.895 2-2v0-6c0-1.105-0.895-2-2-2v0zM10 19h-6v-6h6z"></path>
            <path d="M12 15h8v2h-8v-2z"></path>
            <path d="M17 25v-18h3v-2h-3c-1.105 0-2 0.895-2 2v0 18c0 1.105 0.895 2 2 2v0h3v-2z"></path>
            <path d="M23 4h4c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
            <path d="M23 14h4c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
            <path d="M23 24h4c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
        `
    }
}
export default connect(Diagrams)