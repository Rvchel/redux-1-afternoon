import {createStore} from 'redux';

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorsFirstName: '',
    authorsLastName: '',
    ingredientsList: [],
    instructionsList: [],
    recipeList: []
}

export const UPDATE_NAME = 'UPDATE_DATE'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'


function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
        return {
            ...state,
            recipeName: action.payload
        }
        case UPDATE_CATEGORY:
        return {
            ...state,
            recipeCategory: action.payload
        }
        case UPDATE_AUTHOR_FIRST:
        return {
            ...state,
            authorsFirstName: action.payload
        }
        case UPDATE_AUTHOR_LAST:
        return {
            ...state,
            authorsLastName: action.payload
        }
        case UPDATE_INGREDIENTS:
        const newIng = [...state.ingredientsList, payload]
        return {
            ...state,
            ingredientsList: newIng
        }
        case UPDATE_INSTRUCTIONS:
        const newIns = [...state.instructionsList, payload]
        return {
            ...state,
            instructionsList: newIns
        }
        case ADD_RECIPE:
        console.log(state)
        const {
            recipeName,
            recipeCategory,
            authorsFirstName,
            authorsLastName,
            ingredientsList,
            instructionsList
        } = state;
        const recipe = {
            recipeName,
            recipeCategory,
            authorsFirstName,
            authorsLastName,
            ingredientsList,
            instructionsList
        }
        const newRecipe = [...state.recipeList, recipe]
        console.log(newRecipe)
        return {...state, recipeList: newRecipe}

        default: return state 
    }
}

export default createStore(reducer);

