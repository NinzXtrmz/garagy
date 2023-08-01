import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  faMG = faMagnifyingGlass;
  faT = faTimes;

  text?: string;
  locations: string[] = [];

  constructor() {}

  searchRes() {
    console.log('hey');
    //Todo insert function
  }

  ngOnInit(): void {}
}
