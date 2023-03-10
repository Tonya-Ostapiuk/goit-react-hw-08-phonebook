export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

// export const selectUserEmail = state => state.auth.user.email;

export const selectorFetchingCurrent = state => state.auth.isFetchingCurrentUser;

// export const authSelectors = {
//     selectIsLoggedIn,
//     selectUsername,
//     selectUserEmail,
//     selectorFetchingCurrent,
// }