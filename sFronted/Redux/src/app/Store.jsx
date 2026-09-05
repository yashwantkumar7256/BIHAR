import {configureStore} from '@reduxjs/toolkit'
import counterRoducer from '../features/counterSlice'

export const store= configureStore({
    reducer:{
        counter:counterRoducer,
    }
})