
import { Component, OnInit } from '@angular/core';
import { ICandlestick, ICandlestickResponse, ICandlesticks } from 'src/app/interfaces/news.interface';
import { createChart } from 'lightweight-charts';
import { CoinserviceService } from 'src/app/services/coinservice.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
candlestickData: any[];
symbol: string = "ETHUSDC";
interval: string = "4h";
  constructor( private coinservice: CoinserviceService) { }

  ngOnInit(): void {
    this.getChartData(this.symbol, this.interval);
  }
  
   getChartData(symbol:string, interval:string) {
    const chartProperties = {
      width: 500,
      height: 600,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      textColor: 'black',
      background: { type: 'solid', color: 'black' } 
    }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bb1228910bmsh1d1f3865c0cb8e8p1413dejsna0dd23cbc20e',
        'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
      }
    };
    const domElement = document.getElementById('tvchart');
    const chart = createChart(domElement, chartProperties);
    const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
    this.coinservice.getChartData(symbol, interval).subscribe(
      (data) => {
        this.candlestickData = data.map((d => {
          return {time: +d[0]/1000, open: parseFloat(d[1].toString()), high: parseFloat(d[2].toString()), low: parseFloat(d[3].toString()), close: parseFloat(d[4].toString())};
        }))
        console.log(this.candlestickData);
        
        candlestickSeries.setData(this.candlestickData);
        chart.timeScale().fitContent();
      }
    )
      
  }
  updateChart(symbol:string, interval:string){
    let previousChart = document.getElementById('tvchart');
    previousChart.innerHTML = null;
    const chartProperties = {
      width: 500,
      height: 600,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      textColor: 'black',
      background: { type: 'solid', color: 'black' } 
    }
    const domElement = document.getElementById('tvchart');
    const chart = createChart(domElement, chartProperties);
    const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
    this.coinservice.getChartData(symbol, interval).subscribe(
      (data) => {
        this.candlestickData = data.map((d => {
          return {time: +d[0]/1000, open: parseFloat(d[1].toString()), high: parseFloat(d[2].toString()), low: parseFloat(d[3].toString()), close: parseFloat(d[4].toString())};
        }))
        console.log(this.candlestickData);
        
        candlestickSeries.setData(this.candlestickData);
        chart.timeScale().fitContent();
      }
    )

  }
  changeCrypto(symbol){
        if(symbol === this.symbol) {
          this.updateChart(this.symbol, this.interval)
        }else if(symbol === 'BTCUSDC') {
          this.updateChart('BTCUSDC', this.interval);
          this.symbol = symbol;
        }
  }
}
