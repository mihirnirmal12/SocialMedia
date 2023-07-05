import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { TextAreaQuestion } from '../models/textareaquestion';
import { TextBoxquestion } from '../models/textboxquesion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }


  allQuestions(){
    const questions : QuestionBase<string>[]=[
      new TextBoxquestion({
        key:'postid',
        label:'Post ID',
        type:'textbox',
        required:true,
        order:1
      }),
      new TextBoxquestion({
        key:'posttitle',
        label:'Post Title',
        type:'textbox',
        required:true,
        order:2
      }),
      new TextBoxquestion({
        key:'posturl',
        label:'Post Media URL',
        type:'textbox',
        required:true,
        order:3
      }),
      new TextAreaQuestion({
        key:'caption',
        label:'Post Caption',
        type:'textarea',
        required:true,
        order:4
      }),
      new TextBoxquestion({
        key:'userid',
        label:'User ID',
        type:'textbox',
        required:true,
        order:5
      })
    ]

    return of(questions.sort((a,b)=>a.order-b.order));

  }

}
