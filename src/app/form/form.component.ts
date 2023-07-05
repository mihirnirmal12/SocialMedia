import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionsService } from '../services/questions.service';
import { PostAddActionSuccess } from '../store/social.actions';
import { totalAllPosts } from '../store/social.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!:FormGroup;
  question$ !: Observable<QuestionBase<any>[]>;
  postcounter!:Observable<number>;
  constructor(private quecontrolser:QuestionControlService,private store:Store,private queserv:QuestionsService){
    this.question$=this.queserv.allQuestions();
    this.postcounter=this.store.select(totalAllPosts)
  }

  ngOnInit(){
    this.question$.subscribe((res)=>{
      this.form=this.quecontrolser.formgroup(res  as QuestionBase<string>[]);
    })
  }

  addPost(){
    console.log(this.form.value)
    this.store.dispatch(PostAddActionSuccess({post:this.form.value}));
  }

}
