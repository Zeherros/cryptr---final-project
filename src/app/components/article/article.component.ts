import { Component, OnInit } from '@angular/core';
import { IArticle, IArticles, INews, INewsSaved, ISavedNews } from 'src/app/interfaces/news.interface';
import { NewsComponent} from 'src/app/components/news/news.component'
import { CoinserviceService } from 'src/app/services/coinservice.service';
import { ActivatedRoute } from '@angular/router';
import { Readability } from '@mozilla/readability';
import  JSDOM  from "jsdom";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: IArticle;
  articleUrl: string;
  newsList : IArticles[];
  savedNewsList:ISavedNews = [];
  constructor( private activatedRoute: ActivatedRoute,
              private coinservice: CoinserviceService,
              private http: HttpClient) { }

  ngOnInit(): void {
    const title = this.activatedRoute.snapshot.params['title'];
    this.showArticle(title);
  }
  showArticle(articleTitle:string): void {
    this.coinservice.getNewsArticle(articleTitle).subscribe(
      (news) : void => {
        this.article = news.articles[0];
        console.log(this.article);
        this.articleUrl = news.articles[0].url;
      },
      (err : Error) : void => console.log(err.message));
  }
  
  saveCurrentNews(articleTitle) {
    this.coinservice.getNewsArticle(articleTitle).subscribe(
      (news) : void => {
        this.article = news.articles[0];
        this.savedNewsList.push(this.article.title)
        console.log(this.savedNewsList);
        this.coinservice.addSavedNews(this.savedNewsList).subscribe(
          (newsBeingSaved) => {}
        )
      }
    )
  }
  
}



