import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  expandBarElms: any;

  constructor() {
    this.expandBarElms = [
      {
        name: 'Overview',
        active: true,
        pseudoActive: false
      },
      {
        name: 'What Is a Nonprofit?',
        active: false,
        pseudoActive: false
      },
      {
        name: 'Is a Nonprofit right for you?',
        active: false,
        pseudoActive: false
      },
      {
        name: 'Advantages & Disadvantages',
        active: false,
        pseudoActive: false
      },
      {
        name: 'Types of Nonprofit',
        active: false,
        pseudoActive: false
      },
      {
        name: '501c3 Status',
        active: false,
        pseudoActive: false
      },
      {
        name: 'How to Start a Nonprofit',
        active: false,
        pseudoActive: false
      }
    ];
    console.log(this.expandBarElms);
  }

  ngOnInit(): void {
  }

  expandBarAction(index) {
    this.expandBarElms.filter((e) => {
      return e.active = false;
    });
    this.expandBarElms.forEach((e, i) => {
      if (i < index) {
        e.pseudoActive = true;
      }
    });
    this.expandBarElms[index].active = true;
  }

}


