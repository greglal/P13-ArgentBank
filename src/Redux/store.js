import { configureStore } from "@reduxjs/toolkit"
// import firstNameReducer from '../Redux/Reducers/firstNameReducer';
// import lastNameReducer from '../Redux/Reducers/lastNameReducer';
import tokenReducer from '../Redux/Reducers/tokenReducer';
import userReducer from "./Reducers/userReducer";

/**
 * store configuration
 *
 * @type {EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{dispatch: ExtractDispatchExtensions<Tuple<[ThunkMiddlewareFor<S>]>>}>, StoreEnhancer]>>}
 */
export const store = configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer
    },
})