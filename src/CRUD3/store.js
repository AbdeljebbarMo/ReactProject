import { applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { legacy_createStore as createStore } from 'redux';
import * as type from './actions'
const initialState = {
    loading: false,
    data: [], // Ensure data is initialized as an array
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case type.FETCH_POSTS_REQUEST:
            return { loading: true, data: [], error: '' }
            case type.FETCH_POSTS_SUCCESS:
                return {
                    loading: false,
                    data: action.payload.posts, // Verify that data is being set correctly
                    error: ''
                }
            case type.FETCH_POSTS_FAILURE:
                return {
                    loading: false,
                    data: [],
                    error: action.payload.error
                }
            
        default:
            return state
    }
}
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));