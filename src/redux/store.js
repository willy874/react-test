import { createStore } from 'redux'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'rightAside':
            return Object.assign({}, state, {
                rightAside: action.rightAside || ''
            })
        case 'leftAside':
            return Object.assign({}, state, {
                leftAside: action.leftAside || '',
                //leftAsideComponent: action.rightAsideComponent || ''
            })
        case 'mainTabs':
            return Object.assign({}, state, {
                mainTabs: action.mainTabs || '',
                //mainTabsComponent: action.mainTabsComponent || ''
            })
        default:
          return state
      }
}

export default createStore(reducer)