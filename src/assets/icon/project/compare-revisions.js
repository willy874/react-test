import connect from '@base/redux/connect'
import ICON from '../icon'

class CompareRevisions extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M17.5 23.5l-3-3.3c-0.6-0.6-1.5-0.2-1.5 0.5v6.6c0 0.8 0.9 1.1 1.4 0.6l3-3.3c0.4-0.3 0.4-0.8 0.1-1.1z"></path>
            <path d="M8 11c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM8 5c-1.1 0-2 0.9-2 2s0.9 2 2 2c1.1 0 2-0.9 2-2s-0.9-2-2-2z"></path>
            <path d="M13 25h-3c-1.7 0-3-1.3-3-3v-12h2v12c0 0.6 0.4 1 1 1h3v2z"></path>
            <path d="M15.5 7.7l3 3.3c0.5 0.6 1.4 0.2 1.4-0.6v-6.6c0-0.8-0.9-1.1-1.4-0.6l-3 3.3c-0.3 0.4-0.3 0.9 0 1.2z"></path>
            <path d="M25 28c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM25 22c-1.1 0-2 0.9-2 2s0.9 2 2 2c1.1 0 2-0.9 2-2s-0.9-2-2-2z"></path>
            <path d="M26 21h-2v-12c0-0.6-0.4-1-1-1h-3v-2h3c1.7 0 3 1.3 3 3v12z"></path>
        `
    }
}
export default connect(CompareRevisions)