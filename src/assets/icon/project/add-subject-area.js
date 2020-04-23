import connect from '@base/redux/connect'
import ICON from '../icon'

class AddSubjectArea extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M27 28h-22c-1.657 0-3-1.343-3-3v0-16c0-1.657 1.343-3 3-3v0h22c1.657 0 3 1.343 3 3v0 16c0 1.657-1.343 3-3 3v0zM5 8c-0.552 0-1 0.448-1 1v0 16c0 0.552 0.448 1 1 1v0h22c0.552 0 1-0.448 1-1v0-16c0-0.552-0.448-1-1-1v0z"></path>
            <path d="M13 24h-2c-1.657 0-3-1.343-3-3v0-2c0-1.657 1.343-3 3-3v0h2c1.657 0 3 1.343 3 3v0 2c0 1.657-1.343 3-3 3v0zM11 18c-0.552 0-1 0.448-1 1v0 2c0 0.552 0.448 1 1 1v0h2c0.552 0 1-0.448 1-1v0-2c0-0.552-0.448-1-1-1v0z"></path>
            <path d="M21 18h-2c-1.657 0-3-1.343-3-3v0-2c0-1.657 1.343-3 3-3v0h2c1.657 0 3 1.343 3 3v0 2c0 1.657-1.343 3-3 3v0zM19 12c-0.552 0-1 0.448-1 1v0 2c0 0.552 0.448 1 1 1v0h2c0.552 0 1-0.448 1-1v0-2c0-0.552-0.448-1-1-1v0z"></path>
        `
    }
}
export default connect(AddSubjectArea)