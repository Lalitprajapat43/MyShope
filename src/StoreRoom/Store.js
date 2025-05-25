import { configureStore } from "@reduxjs/toolkit";
import Mainslicer from '../SlicerRoom/MainSlicer';

let store = configureStore({
    reducer:{
        Main:Mainslicer
    }
})

export default store ;