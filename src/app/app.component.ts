import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/question-base';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialMedia';

  constructor(private queserv:QuestionsService){
     
  }

}
