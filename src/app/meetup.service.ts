import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';import {Observable} from 'rxjs/Rx';
import {Meetup} from './meetup';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MeetupService {
  private meetupURL = 'https://api.meetup.com/CODE-Norman/events?photo-host=public&page=20&sig_id=114224172&sig=51b672f8620b7de7ac690ecf84fbf5dd52f7d12d';

  constructor(private http:Http){}

  futureMeetings(): Observable<Meetup[]> {
    return this.http.get(this.meetupURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
  }


}
