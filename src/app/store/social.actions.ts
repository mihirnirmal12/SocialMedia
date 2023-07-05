import { createAction, props } from "@ngrx/store";
import { posts, users } from "../models/data";

export const PostDeleteAction = createAction("[Post] delete Post",props<{id:number}>())
export const PostAddActionSuccess = createAction("[Post] add Post success",props<{post:posts}>())
export const UserActionSuccess = createAction("[Post] add Post success",props<{post:posts}>())
export const ActiveUserAction=createAction("[active user] active user",props<{user:users}>())