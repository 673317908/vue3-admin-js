export default {
  namespaced: true,
  state: {
    collapsedStatus: JSON.parse(localStorage.getItem("collapsedStatus")) || false,
    selectedKeys: localStorage.getItem("selectedKeys") || [],
    openKeys: localStorage.getItem("openKeys") || [],
    language: localStorage.getItem("language") || "ch"
  },
  mutations: {
    SET_COLLAPSED(state, value) {
      state.collapsedStatus = value
      localStorage.setItem("collapsedStatus", JSON.stringify(value))
    },
    SET_SELECTED_KEYS(state, value) {
      state.selectedKeys = value
      localStorage.setItem("selectedKeys", value)
    },
    SET_OPEN_KEYS(state, value) {
      state.openKeys = value
      localStorage.setItem("openKeys", value)
    },
    SET_LANGUAGE(state, value) {
      state.language = value
      localStorage.setItem("language", value)
    }
  }
}