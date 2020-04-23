import { connect } from 'react-redux'

export default (component , stateDefault = state=>({...state}) ) =>{
   return  connect(stateDefault)(component)
}