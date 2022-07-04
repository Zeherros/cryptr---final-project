import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle, INews, ISavedNews } from '../interfaces/news.interface';
import { CoinserviceService } from '../services/coinservice.service';
import { NewsComponent } from '../components/news/news.component'; 
@Component({
  selector: 'app-savednews',
  templateUrl: './savednews.component.html',
  styleUrls: ['./savednews.component.css']
})
export class SavednewsComponent implements OnInit {
  article:IArticle;
  articlesToShow:IArticle[]=[];
  constructor(private coinservice: CoinserviceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const title = this.activatedRoute.snapshot.params['title'];
    this.showSaved();
  }
  showSaved() {
    this.coinservice.getSavedNews().subscribe(
      (savednews) => {
       console.log(savednews);
         this.articlesToShow = [...savednews];
         console.log(this.articlesToShow);
        }
        )
       }
  
    goToArticle( index:number):void {
      this.router.navigate(['/article', this.articlesToShow[0][index].title])
    }
    editArticle(article) {
      this.coinservice.editSavedNews(article).subscribe(
        (updatedNews) => {
          console.log(updatedNews);
          }
      )  
        }
      
    deleteArticle(article) {
      this.coinservice.deleteSavedNews(article).subscribe();
    }
    }

    
   
         
  

      
        
    


