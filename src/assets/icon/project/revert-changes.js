import connect from '@base/redux/connect'
import ICON from '../icon'

class RevertChanges extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M20.4 9.333h-1.733v-4c0-1.2-1.467-1.733-2.267-0.933l-4.533 4.933h-1.2v-4c0-1.2-1.467-1.733-2.267-0.933l-4.933 5.333c-0.533 0.533-0.533 1.333 0 1.867l4.8 5.2c0.933 0.8 2.4 0.267 2.4-0.933v-3.867h1.333l4.4 4.8c0.8 0.933 2.267 0.267 2.267-0.933v-3.867h1.733c2.933 0 5.333 2.4 5.333 5.333v1.333c0 2.933-2.4 5.333-5.333 5.333h-12.4v2.667h12.4c4.4 0 8-3.6 8-8v-1.333c0-4.4-3.6-8-8-8z"></path>
        `
    }
}
export default connect(RevertChanges)