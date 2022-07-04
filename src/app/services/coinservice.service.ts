import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle, IArticles, ICandlestickResponse, INews, ISavedNews } from '../interfaces/news.interface';
import { IMarketCap } from '../interfaces/news.interface';
import  JSDOM  from "jsdom"
import { Readability } from '@mozilla/readability';

@Injectable({
  providedIn: 'root'
})
export class CoinserviceService {

  constructor( private http: HttpClient) { }
  getNewsService(): Observable<INews[]> {
    return this.http.get<INews[]>(`https://newsapi.org/v2/everything?q=crypto&apiKey=34851274661c4bd3bdd7000545544440`);
  }
  getMarketCapData():Observable<IMarketCap> {
    return this.http.get<IMarketCap>('http://localhost:3100');
  }
  getNewsArticle(title:string): Observable<INews> {
    return this.http.get<INews>(`https://newsapi.org/v2/everything?q=${title}&apiKey=34851274661c4bd3bdd7000545544440`);
  }
  getNewsContent(url:string):Observable<string> {
    return this.http.get<string>(url);
  }
  getChartData(symbol:string, interval:string):Observable<Array<Array<string | number>>> {
    return this.http.get<ICandlestickResponse>(`http://localhost:3300/${symbol}/${interval}`);
  }
  addSavedNews(title:ISavedNews):Observable<ISavedNews> {
    return this.http.post<ISavedNews>('http://localhost:3000/news', title);
  }
  getSavedNews():Observable<ISavedNews> {
    return this.http.get<ISavedNews>('http://localhost:3000/news');
  }
}

