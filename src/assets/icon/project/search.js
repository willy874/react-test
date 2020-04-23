import connect from '@base/redux/connect'
import ICON from '../icon'

class Search extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M14 23.8c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8c5.4 0 9.8 4.4 9.8 9.8s-4.4 9.8-9.8 9.8zM14 5.8c-4.52 0-8.2 3.68-8.2 8.2s3.68 8.2 8.2 8.2 8.2-3.68 8.2-8.2-3.68-8.2-8.2-8.2z"></path>
            <path d="M19.432 20.564l1.131-1.131 8.004 8.004-1.131 1.131-8.004-8.004z"></path>
        `
    }
}
export default connect(Search)