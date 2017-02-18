import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PanelModule, ButtonModule, InputTextModule, InputTextareaModule, InputSwitchModule, ToolbarModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupSuggestionComponent } from './meetup-suggestion/meetup-suggestion.component';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
  {path: '', redirectTo:'upcoming-meetups', pathMatch:"full"},
  {path: 'upcoming-meetups', component: MeetupsComponent},
  {path: 'suggest-meetup', component: MeetupSuggestionComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'vote', redirectTo: 'suggest-meetup'}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MeetupsComponent,
    MeetupSuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ButtonModule, InputTextModule, InputTextareaModule,
    InputSwitchModule, ToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
