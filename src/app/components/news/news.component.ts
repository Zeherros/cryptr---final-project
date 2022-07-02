import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinserviceService } from 'src/app/services/coinservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArticles: any[];
  constructor(private coinservice: CoinserviceService,
              private router: Router) { }

  ngOnInit(): void {
    this.goToNews();
  }
  goToNews():void {
    this.coinservice.getNewsService().subscribe(
      (news) : void => {
        console.log(news)
        this.newsArticles = news['articles'];
      },
      (err : Error) : void => console.log(err.message));
  }
  goToArticle( index:number):void {
    this.router.navigate(['/article', this.newsArticles[index].title])
  }
}
