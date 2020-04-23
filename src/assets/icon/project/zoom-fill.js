import connect from '@base/redux/connect'
import ICON from '../icon'

class ZoomFill extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M28 4h-22.667c-1.473 0-2.667 1.194-2.667 2.667v0 18.667c0 1.473 1.194 2.667 2.667 2.667v0h22.667c1.473 0 2.667-1.194 2.667-2.667v0-18.667c0-1.473-1.194-2.667-2.667-2.667v0zM28 20v5.333h-22.667v-18.667h22.667v13.333z"></path>
            <path d="M13.333 12h6.667c0.736 0 1.333 0.597 1.333 1.333v5.333c0 0.736-0.597 1.333-1.333 1.333h-6.667c-0.736 0-1.333-0.597-1.333-1.333v-5.333c0-0.736 0.597-1.333 1.333-1.333z"></path>
        `
    }
}
export default connect(ZoomFill)