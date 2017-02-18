import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PanelModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeetupsComponent } from './meetups/meetups.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MeetupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
