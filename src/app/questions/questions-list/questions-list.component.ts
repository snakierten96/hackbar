import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  questions = [
    "one",
    "two",
    "three",
    "four"
  ];

  constructor() { }

  ngOnInit() {
  }

}
