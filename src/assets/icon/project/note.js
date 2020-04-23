import connect from '@base/redux/connect'
import ICON from '../icon'

class Note extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M10.667 12h-8l8-8v8z"></path>
            <path d="M28 4h-17.333l-8 8v13.333c0 1.473 1.194 2.667 2.667 2.667v0h22.667c1.473 0 2.667-1.194 2.667-2.667v0-18.667c0-1.473-1.194-2.667-2.667-2.667v0zM28 25.333h-22.667v-14.6l3.907-4.067h18.76z"></path>
            <path d="M10.667 13.333h12v2.667h-12v-2.667z"></path>
            <path d="M10.667 18.667h8v2.667h-8v-2.667z"></path>
        `
    }
}
export default connect(Note)