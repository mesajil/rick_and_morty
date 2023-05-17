import ActionTypes from './action-types'

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        // myFavorites
        case ActionTypes.ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case ActionTypes.REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(e => e.id !== Number(action.payload)),
                allCharacters: state.allCharacters.filter(e => e.id !== Number(action.payload))
            }
        case ActionTypes.FILTER:
            return {
                ...state,
                myFavorites:
                    action.payload !== "All"
                        ? state.allCharacters.filter(e => e.gender === action.payload)
                        : state.allCharacters
            }
        case ActionTypes.ORDER:
            const myFavorites = [...state.myFavorites]
            myFavorites.sort((a, b) => action.payload === "A" ? a.id - b.id : b.id - a.id)
            return { ...state, myFavorites }

        default: return state;
    }
}

