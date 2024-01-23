// token selector
export const selectToken = (state) => {
    return state.token.value
}
// first name selector
export const selectFirstName = (state) => {
    return state.user.firstName
}
// last name selector
export const selectLastName = (state) => {
    return state.user.lastName
}