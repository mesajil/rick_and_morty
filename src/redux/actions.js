import actionTypes from './action-types'

const actionCreator = (type, payload) => ({ type, payload })

// Favorites

export const addFavorite = (character) => actionCreator(actionTypes.ADD_FAV, character)
export const removeFavorite = (id) => actionCreator(actionTypes.REMOVE_FAV, id)
export const filterCards = (gender) => actionCreator(actionTypes.FILTER, gender)
export const orderCards = (order) => actionCreator(actionTypes.ORDER, order)
