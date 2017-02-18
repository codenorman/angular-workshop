import { Injectable } from '@angular/core';
import {Meetup} from './meetup';

@Injectable()
export class MeetupService {
  meetups: Meetup[];
  constructor() {
    this.meetups = []; // initialize array
    this.meetups.push(new Meetup('Angular 2 - Part 1','http://meetup.com', 'Angular Workshop'));
    this.meetups.push(new Meetup('Angular 2 – Part 2','http://meetup.com', 'Angular Workshop'));
  }

  futureMeetings(){
    return this.meetups;
  }

}
