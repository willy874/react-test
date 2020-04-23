import connect from '@base/redux/connect'
import ICON from '../icon'

class SettingButton extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M5 4h2v8h-2v-8z"></path>
            <path d="M5 18h2v10h-2v-10z"></path>
            <path d="M5 12h2c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2z"></path>
            <path d="M25 9h2c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2z"></path>
            <path d="M15 4h2v14h-2v-14z"></path>
            <path d="M25 4h2v9h-2v-9z"></path>
            <path d="M15 23h2v5h-2v-5z"></path>
            <path d="M25 15h2v13h-2v-13z"></path>
            <path d="M15 17h2c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2z"></path>
        `
    }
}
export default connect(SettingButton)