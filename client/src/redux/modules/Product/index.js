import { combineReducers } from 'redux'
const INCREASE_COUNT ='INCREASE_COUNT'

const initialState = [
  {
    count: 0,
    id: 0
  }
]

export const addLike = (id) => ({
  type: INCREASE_COUNT,
  id
})

const addLikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:

    return state.map(product =>
    product.id === action.id ?
    {...product, count: product.upvote + 1}:
    product
  )

    default:
      return state
  }
}

export default combineReducers({
  addLikesReducer
})
