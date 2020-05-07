import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questionsAndAnswers: any;

  constructor() {
    this.questionsAndAnswers = [
      {
        question: 'What is an Advisory Group and do I need one for my nonprofit?',
        // tslint:disable-next-line:max-line-length
        answer: 'In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.',
        isExpanded: false
      },
      {
        question: 'How do I create a budget for my nonprofit?',
        // tslint:disable-next-line:max-line-length
        answer: 'In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.',
        isExpanded: false
      },
      {
        question: 'Do I need to have a mission statement for my nonprofit?',
        // tslint:disable-next-line:max-line-length
        answer: 'In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.',
        isExpanded: false
      }
    ];

  }

  ngOnInit(): void {
  }

  expandIt(index) {
    this.questionsAndAnswers.forEach((e, i) => {
      if (i !== index) {
        e.isExpanded = false;
      }
    });
    this.questionsAndAnswers[index].isExpanded = !this.questionsAndAnswers[index].isExpanded;
  }
}
