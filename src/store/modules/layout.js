import { SET_STORAGE, GET_STORAGE } from "../../utils/storageTool"
export default {
  namespaced: true,
  state: {
    collapsedStatus: JSON.parse(GET_STORAGE("collapsedStatus")) || false,
    selectedKeys: GET_STORAGE("selectedKeys") || [],
    openKeys: GET_STORAGE("openKeys") || [],
    language: GET_STORAGE("language") || "ch"
  },
  mutations: {
    SET_COLLAPSED(state, value) {
      state.collapsedStatus = value
      SET_STORAGE("collapsedStatus", JSON.stringify(value))
    },
    SET_SELECTED_KEYS(state, value) {
      state.selectedKeys = value
      SET_STORAGE("selectedKeys", value)
    },
    SET_OPEN_KEYS(state, value) {
      state.openKeys = value
      SET_STORAGE("openKeys", value)
    },
    SET_LANGUAGE(state, value) {
      state.language = value
      SET_STORAGE("language", value)
    }
  }
}