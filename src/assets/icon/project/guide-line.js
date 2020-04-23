import connect from '@base/redux/connect'
import ICON from '../icon'

class GuideLine extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M6.667 20c-0.003 0-0.007-0-0.011-0-2.209 0-4 1.791-4 4s1.791 4 4 4c1.731 0 3.206-1.1 3.762-2.639l0.009-0.028h5.573v-2.667h-5.573c-0.564-1.563-2.033-2.662-3.759-2.667h-0.001z"></path>
            <path d="M25.147 4h5.333v2.667h-5.333v-2.667z"></path>
            <path d="M18.667 6.667v4.76h2.667v-4.76l-2.427-1.107c-0.152 0.325-0.24 0.705-0.24 1.106 0 0 0 0.001 0 0.001v-0z"></path>
            <path d="M18.667 16.76h2.667v5.333h-2.667v-5.333z"></path>
        `
    }
}
export default connect(GuideLine)