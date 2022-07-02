import { Component, OnInit } from '@angular/core';
import { IArticle, IArticles, INews, INewsSaved } from 'src/app/interfaces/news.interface';
import { NewsComponent} from 'src/app/components/news/news.component'
import { CoinserviceService } from 'src/app/services/coinservice.service';
import { ActivatedRoute } from '@angular/router';
import { Readability } from '@mozilla/readability';
import  JSDOM  from "jsdom";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: IArticle;
  articleUrl: string;
  newsList : INews;
  constructor( private activatedRoute: ActivatedRoute,
              private coinservice: CoinserviceService) { }

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
        // this.coinservice.getNewsContent(this.articleUrl).subscribe(
        //   (res) => {
        //     let dom = new JSDOM(res, {
        //       url: this.articleUrl
        //     });
        //     let article = new Readability(dom.window.document).parse();
        //     console.log(article.textContent);
             
        //   }
        // )

      },
      (err : Error) : void => console.log(err.message));
  }
  saveCurrentNews(title:string){
    this.coinservice.getSavedNews().subscribe(
      (savednews) => {
        this.newsList = savednews;
        
      }

    )
  }
  }

