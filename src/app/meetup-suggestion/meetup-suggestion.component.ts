import { Component, OnInit, Input, Output } from '@angular/core';
import {MeetupSuggestionService} from "../meetup-suggestion.service";
import {MeetupSuggestion} from "../meetup-suggestion";

@Component({
  selector: 'app-meetup-suggestion',
  templateUrl: './meetup-suggestion.component.html',
  styleUrls: ['./meetup-suggestion.component.css'],
  providers: [MeetupSuggestionService]
})
export class MeetupSuggestionComponent implements OnInit {
  @Input()
  @Output()
  suggested: MeetupSuggestion[];

  constructor(private meetupSuggestionService: MeetupSuggestionService) { }

  ngOnInit() {
    this.suggested = this.meetupSuggestionService.getSuggestions();
  }

  addSuggestion(){
    console.log('called');
    this.meetupSuggestionService.add();
    this.suggested = this.meetupSuggestionService.getSuggestions();
  }
  addVote(index){
    console.log('index', index);
    this.meetupSuggestionService.addVote(index);
    this.suggested = this.meetupSuggestionService.getSuggestions();
  }

}
