import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { posts } from '../models/data';
import { PostDeleteAction } from '../store/social.actions';
import { selectallPosts } from '../store/social.selectors';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  allPosts$!:Observable<Array<posts>>;

  constructor(private store:Store, ){
     this.allPosts$=this.store.select(selectallPosts)
  }
 
  deletePost(id:number){
    this.store.dispatch(PostDeleteAction({id:id}));
  } 
  
  editPost(post:posts){
    
  } 

}

