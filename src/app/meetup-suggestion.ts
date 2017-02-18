import {Meetup} from './meetup';

export class MeetupSuggestion extends Meetup {
  willPresent: boolean;
  email: string;
  votes: number;

  constructor(name:string, description:string, willPresent:boolean, email:string) {
    super(name,null,description);
    this.willPresent = willPresent;
    this.email = email;
    this.votes = 0;
  }
}
