import connect from '@base/redux/connect'
import ICON from '../icon'

class Mouse extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
        <path d="M24.613 19.787l-14.96-15.573v21.213l5.333-3.84 2.907 6.893 2.96-1.24-2.947-6.84zM16.213 20.547v0z"></path>
        `
    }
}
export default connect(Mouse)