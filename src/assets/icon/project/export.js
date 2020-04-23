import connect from '@base/redux/connect'
import ICON from '../icon'

class Export extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M6.667 6.667v18.667h18.667v-6.645h2.667v6.645c0 1.473-1.194 2.667-2.667 2.667h-18.667c-1.473 0-2.667-1.194-2.667-2.667v-18.667c0-1.473 1.194-2.667 2.667-2.667h6.614v2.667h-6.614zM17.333 4h10.667v2.667h-10.667v-2.667zM25.333 6.667h2.667v8h-2.667v-8z"></path>
            <path d="M24.391 5.724l-8.521 8.521 1.886 1.886 8.521-8.521z"></path>
        `
    }
}
export default connect(Export)