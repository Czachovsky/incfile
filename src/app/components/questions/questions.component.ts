import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class QuestionsComponent implements OnInit {

  expandBarElms: any;
  activeTab: number;
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
    this.activeTab = 0;
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
    this.activeTab = index;
  }

}


