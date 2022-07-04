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
  articlesToShow:IArticle[]=[];
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
         this.articlesToShow.push(savednews);
         console.log(this.articlesToShow);
         

        }
        )
       }
      
         }
   

      
        
    


