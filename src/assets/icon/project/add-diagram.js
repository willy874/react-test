import connect from '@base/redux/connect'
import ICON from '../icon'

class AddDiagram extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M12 12v10h-8v-10h8zM12 10h-8c-1.105 0-2 0.895-2 2v0 10c0 1.105 0.895 2 2 2v0h8c1.105 0 2-0.895 2-2v0-10c0-1.105-0.895-2-2-2v0z"></path>
            <path d="M18 18h-5v-2h3v-8h6v2h-4v8z"></path>
            <path d="M22 26h-6v-8h2v6h4v2z"></path>
            <path d="M26 8v2h-2v-2h2zM26 6h-2c-1.105 0-2 0.895-2 2v0 2c0 1.105 0.895 2 2 2v0h2c1.105 0 2-0.895 2-2v0-2c0-1.105-0.895-2-2-2v0z"></path>
            <path d="M26 24v2h-2v-2h2zM26 22h-2c-1.105 0-2 0.895-2 2v0 2c0 1.105 0.895 2 2 2v0h2c1.105 0 2-0.895 2-2v0-2c0-1.105-0.895-2-2-2v0z"></path>
            <path d="M26 16v2h-2v-2h2zM26 14h-2c-1.105 0-2 0.895-2 2v0 2c0 1.105 0.895 2 2 2v0h2c1.105 0 2-0.895 2-2v0-2c0-1.105-0.895-2-2-2v0z"></path>
            <path d="M17 16h7v2h-7v-2z"></path>
        `
    }
}
export default connect(AddDiagram)