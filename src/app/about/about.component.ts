import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos = {
    name: 'Super Stafa',
    email: 'sasa@gmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
