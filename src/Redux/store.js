// import { configureStore  } from '@reduxjs/toolkit';
// import authReducer from './Reducers/authReducer';
// import firstNameReducer from '../Redux/Reducers/firstNameReducer';
// import lastNameReducer from '../Redux/Reducers/lastNameReducer';
// import tokenReducer from '../Redux/Reducers/tokenReducer';
//
// const store= configureStore  ({
//     reducer: {
//         auth : authReducer,
//         firstName : firstNameReducer,
//         lastName : lastNameReducer,
//         token : tokenReducer
//     },
// });
//
// export default store;

import { configureStore } from "@reduxjs/toolkit"

// redux slice
import firstNameReducer from '../Redux/Reducers/firstNameReducer';
import lastNameReducer from '../Redux/Reducers/lastNameReducer';
import tokenReducer from '../Redux/Reducers/tokenReducer';

/* configureStore :  create the Redux store
store : assemble state, action and reducer */
export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        token: tokenReducer
    },
})