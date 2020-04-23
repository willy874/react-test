import connect from '@base/redux/connect'
import ICON from '../icon'

class AddTable extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
        <path d="M26.667 4h-21.333c-1.473 0-2.667 1.194-2.667 2.667v0 18.667c0 1.473 1.194 2.667 2.667 2.667v0h21.333c1.473 0 2.667-1.194 2.667-2.667v0-18.667c0-1.473-1.194-2.667-2.667-2.667v0zM14.667 25.333h-9.333v-6.667h9.333zM14.667 16h-9.333v-6.667h9.333zM26.667 25.333h-9.333v-6.667h9.333zM26.667 16h-9.333v-6.667h9.333z"></path>
        `
    }
}
export default connect(AddTable)