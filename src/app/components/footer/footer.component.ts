import { Component, OnInit } from '@angular/core';
import { CoinserviceService } from 'src/app/services/coinservice.service';
import { IMarketCap } from 'src/app/interfaces/news.interface'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  coinMarketData: IMarketCap;
  totalMarketCap:number;
  formattedNumber:number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMarketData();
  }
  panelOpenState = false;
  getMarketData(): void {
    this.http.get<IMarketCap>("http://localhost:3000").subscribe(
      (coinData) => {
        this.coinMarketData = coinData;
        this.totalMarketCap = this.coinMarketData.data.quote['USD'].total_market_cap;
        console.log(this.coinMarketData)
      },
      (err: Error) => console.log(err.message)
    )
  }
}
