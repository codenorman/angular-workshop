import { Component, OnInit } from '@angular/core';
import {Meetup} from '../meetup';
import {MeetupService} from "../meetup.service";
@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css'],
  providers: [MeetupService]
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];
  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.futureMeetings()
      .subscribe( meetups => {
          this.meetups = meetups;
        },
        err => {
          console.log(err)
        })
  }
}
