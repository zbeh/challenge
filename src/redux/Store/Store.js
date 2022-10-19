import { configureStore } from '@reduxjs/toolkit'
import FavoriteReducer from '../Reducers/FavoriteReducer'
import CommentReducer from '../Reducers/CommentReducer'
 const store =  configureStore({
  reducer: {
    favorite:FavoriteReducer,
    comments:CommentReducer
  },
})

export default store