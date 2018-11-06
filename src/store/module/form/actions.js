export function setPhoneNumber ({ commit }, payload) {
    commit('UPDATE_PHONE_NUMBER', payload)
}

export function setEnterCode ({ commit }, payload) {
    commit('UPDATE_ENTER_CODE', payload)
}
export function setNewData ({ commit }, payload) {
    commit('SET_NEW_DATA', payload)
}

export function setTimer ({ commit }, payload) {
    commit('START_TIMER', payload)
}
