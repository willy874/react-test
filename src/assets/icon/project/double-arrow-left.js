import connect from '@base/redux/connect'
import ICON from '../icon'

class DoubleArrowLeft extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M28.444 26.667v-21.333l-10.667 10.667z"></path>
            <path d="M14.222 26.667v-21.333l-10.667 10.667z"></path>
        `
    }
}
export default connect(DoubleArrowLeft)