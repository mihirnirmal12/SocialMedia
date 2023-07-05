import { QuestionBase } from "./question-base";

export class TextBoxquestion extends QuestionBase<string>{
    override controlType='textbox';
}