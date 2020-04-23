import connect from '@base/redux/connect'
import ICON from '../icon'

class DiagramExplorer extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M30 8h-3v-3c0-1.105-0.895-2-2-2v0h-22c-1.105 0-2 0.895-2 2v0 16c0 1.105 0.895 2 2 2v0h3v3c0 1.105 0.895 2 2 2v0h22c1.105 0 2-0.895 2-2v0-16c0-1.105-0.895-2-2-2v0zM6 10v11h-3v-16h22v3h-17c-1.105 0-2 0.895-2 2v0zM18 18h-10v-6h10zM8 20h10v6h-10zM30 26h-10v-6h10zM30 18h-10v-6h10z"></path>
        `
    }
}
export default connect(DiagramExplorer)