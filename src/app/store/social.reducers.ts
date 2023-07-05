import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { posts, SocialMediaState } from "../models/data";
import { ActiveUserAction, PostAddActionSuccess, PostDeleteAction} from "./social.actions";

export const initialState:SocialMediaState={
    registerusers:[],
    posts:[],
    activeuser:undefined
}

export const ProductReducers = createReducer(
    initialState,
    on(PostAddActionSuccess,(state,{post:post})=> ({ ...state,posts:[post,...state.posts]})),
    on(PostDeleteAction,(state,{id:id})=>({...state,posts:state.posts.filter(x=>x.postid!=id)})),
    on(ActiveUserAction,(state,{user:user})=>({...state,activeuser:user}))
)   

