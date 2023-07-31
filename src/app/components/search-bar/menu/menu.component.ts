import { Component, OnInit } from '@angular/core';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  faT = faTimes;
  faB = faBars;
  clicked = false;

  constructor() {}

  ngOnInit(): void {}

  adjust() {
    this.clicked = !this.clicked;
  }
}
