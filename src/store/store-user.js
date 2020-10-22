const state = {
users:[{
    userId:"1",
    userName: "srinath",
    email:"patelsrinath29@gmail.com",
    password: '123456789'
}],
currentUser: null,
userFiles:[{
    email: "patelsrinath29@gmail.com",
    fileName:"demo",
    filePath: "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" 
}]
}

const mutations = {
    setCurrentUser: (state, user) => {
        state.currentUser = user;
    },
    registerUser: (state, user) => {
        state.users.push(user);
    },
    addFile: (state, userFile) => {
        state.userFiles.push(userFile);
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
    },
    getFiles: (state) => {
        return state.userFiles
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}