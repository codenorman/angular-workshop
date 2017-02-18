import {Injectable} from '@angular/core';
import {MeetupSuggestion} from "./meetup-suggestion";

@Injectable()
export class MeetupSuggestionService {
  suggestions: MeetupSuggestion[];

  constructor() {
    this.suggestions = [
      new MeetupSuggestion('Docker', 'A workshop on Docker', true, ''),
      new MeetupSuggestion('lets encrypt', 'A workshop on lets encrypt', false, ''),
      new MeetupSuggestion('Linux command  line', 'workshop on bash', false, ''),
      new MeetupSuggestion('MongoDB', 'A workshop on MongoDB', true, ''),
      new MeetupSuggestion('RabbitMQ', 'A workshop on RabbitMQ', true, ''),
      new MeetupSuggestion('Linode', 'A workshop on using a VPS Server on Linode. Linode has a new $5 month server.', true, '')
    ]
  }

  getSuggestions(): MeetupSuggestion[] {
    return this.suggestions;
  }
  add(){
    this.suggestions.push( new MeetupSuggestion('', '', false, ''));
  }
  addVote(index){
    this.suggestions[index].votes +=1;
    this.suggestions.sort( (a,b) => {
      return a.votes < b.votes ? 1 : -1;
    });
  }
}
