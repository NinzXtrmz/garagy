import { Component, OnInit, Input } from '@angular/core';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  NgForm,
} from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  faMG = faMagnifyingGlass;
  faT = faTimes;
  text?: string;
  cityName: any;

  constructor() {
    this.cityName = new FormGroup({
      name: new FormControl(),
    });
  }

  searchRes() {
    //TODO add a function here
  }

  ngOnInit(): void {}
}
