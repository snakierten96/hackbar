import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrls: ['./questions-list-item.component.scss']
})
export class QuestionsListItemComponent implements OnInit {

  @Input('question') question;

  constructor() { }

  ngOnInit() {
  }

}
