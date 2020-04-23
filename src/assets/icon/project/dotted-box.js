import connect from '@base/redux/connect'
import ICON from '../icon'

class DottedBox extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M1.333 4h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M1.333 9.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M1.333 14.667h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M1.333 20h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M1.333 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M28 9.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M28 14.667h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M28 20h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M28 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M6.667 4h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M12 4h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M17.333 4h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M22.667 4h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M6.667 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M12 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M17.333 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M22.667 25.333h2.667v2.667h-2.667v-2.667z"></path>
            <path d="M28 4h2.667v2.667h-2.667v-2.667z"></path>
        `
    }
}
export default connect(DottedBox)