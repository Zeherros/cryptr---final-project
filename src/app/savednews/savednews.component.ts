import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savednews',
  templateUrl: './savednews.component.html',
  styleUrls: ['./savednews.component.css']
})
export class SavednewsComponent implements OnInit {
  newsList = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
