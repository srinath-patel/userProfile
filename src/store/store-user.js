const state = {
users:[{
    userId:"1",
    userName: "srinath",
    email:"patelsrinath29@gmail.com",
    password: '123456789'
}],
currentUser: null
}

const mutations = {
    setCurrentUser: (state, user) => {
        state.currentUser = user;
    },
    registerUser: (state, user) => {
        state.users.push(user);
    }
}

const actions = {

}

const getters = {
    users: (state) => {
        return state.users
    },
    currentUser: (state) => {
        return state.currentUser
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}