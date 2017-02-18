import { Component, OnInit } from '@angular/core';
import {Meetup} from '../meetup';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];
  constructor() { }

  ngOnInit() {
    this.meetups = []; // initialize array
    this.meetups.push(new Meetup('Angular 2 - Part 1','http://meetup.com', 'Angular Workshop'));
    this.meetups.push(new Meetup('Angular 2 – Part 2','http://meetup.com', 'Angular Workshop'));
  }
}
