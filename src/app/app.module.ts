import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdTabsModule,
  MdInputModule,
  MdProgressBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home';
import { QuestionsModule } from './questions';
import { TagsModule } from './tags';
import { UsersModule } from './users';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdTabsModule,
    MdInputModule,
    MdProgressBarModule,
    AppRoutingModule,
    HomeModule,
    QuestionsModule,
    TagsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
