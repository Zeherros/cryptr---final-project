import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, INews, ISavedNews } from '../interfaces/news.interface';
import { CoinserviceService } from '../services/coinservice.service';

@Component({
  selector: 'app-savednews',
  templateUrl: './savednews.component.html',
  styleUrls: ['./savednews.component.css']
})
export class SavednewsComponent implements OnInit {
  newsList = [];
  savednewsList:ISavedNews[];
  article:IArticle;
  articleToShow:INews[]=[];
  constructor(private coinservice: CoinserviceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const title = this.activatedRoute.snapshot.params['title'];
    this.showSaved();
  }
  showSaved() {
    this.coinservice.getSavedNews().subscribe(
      (savednews) => {
       console.log(savednews);
       for (const j in savednews) {
        this.coinservice.getNewsArticle(savednews[j]).subscribe(
          (newsgot) => {
            if(newsgot.totalResults === 1){
              this.articleToShow.push(newsgot)  
            }
        }
        )
       }
       console.log(this.articleToShow);
       
          // for (const i in newsgot) {
          //   if(newsgot.articles[0].title === this.newsList[i]){
          //     this.articleToShow.push(this.newsList[i]);
          //     console.log(this.articleToShow);
              
          //   }
          // }
         }
       )  
        }
         
        }
      
        
    


