import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  sliderArray: any;

  constructor() {
    this.sliderArray = [
      {
        img: '../../../assets/images/articlesComponent/article1.png',
        alt: '',
        text: 'Here’s Seven Tips to Steer You in the Right Direction.',
        specialBadge: true,
        specialBadgeText: 'Most popular'
      },
      {
        img: '../../../assets/images/articlesComponent/article2.png',
        alt: '',
        text: 'How to Balance Owning Multiple Businesses.',
        specialBadge: false,
        specialBadgeText: ''
      },
      {
        img: '../../../assets/images/articlesComponent/article3.png',
        alt: '',
        text: 'Here’s Four Tips to Steer You in the Right Direction.',
        specialBadge: false,
        specialBadgeText: ''
      },
      {
        img: '../../../assets/images/articlesComponent/article1.png',
        alt: '',
        text: 'How to Balance Owning Multiple Businesses.',
        specialBadge: true,
        specialBadgeText: 'Most popular'
      },
      {
        img: '../../../assets/images/articlesComponent/article2.png',
        alt: '',
        text: 'Here’s Six Tips to Steer You in the Right Direction.',
        specialBadge: false,
        specialBadgeText: ''
      },
      {
        img: '../../../assets/images/articlesComponent/article3.png',
        alt: '',
        text: 'How to Balance Owning Multiple Businesses.',
        specialBadge: false,
        specialBadgeText: ''
      },

    ];
  }

  ngOnInit(): void {
  }

}
