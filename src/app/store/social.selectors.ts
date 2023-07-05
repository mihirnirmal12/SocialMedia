import { createFeatureSelector, createSelector } from "@ngrx/store";
import { posts, SocialMediaState } from "../models/data";

export const socialmedia = createFeatureSelector<SocialMediaState>('posts');
export const selectallPosts =createSelector(socialmedia,(state)=>state.posts);
export const totalAllPosts= createSelector(socialmedia,(state)=>state.posts.length);
export const getPostDetails=( {id:number}) =createSelector(socialmedia,(sta))