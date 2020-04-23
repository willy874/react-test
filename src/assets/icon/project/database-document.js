import connect from '@base/redux/connect'
import ICON from '../icon'

class DatabaseDocument extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M22 5h-15c-1.7 0-3 1.3-3 3v19c0 1.7 1.3 3 3 3h15c1.7 0 3-1.3 3-3v-19c0-1.7-1.3-3-3-3zM12.1 12.4c-0.3-0.2-0.8-0.2-1.2 0l-0.9 0.7v-6.1h3v6.1l-0.9-0.7zM23 27c0 0.6-0.4 1-1 1h-15c-0.6 0-1-0.4-1-1v-19c0-0.6 0.4-1 1-1h1v8c0 0.8 0.9 1.3 1.6 0.8l1.9-1.4 1.9 1.4c0.7 0.5 1.6 0 1.6-0.8v-8h7c0.6 0 1 0.4 1 1v19z"></path>
            <path d="M26 1h-15c-1.3 0-2.4 0.8-2.8 2h17.8c0.6 0 1 0.4 1 1v21.9c1.2-0.4 2-1.5 2-2.8v-19.1c0-1.6-1.4-3-3-3z"></path>
        `
    }
}
export default connect(DatabaseDocument)