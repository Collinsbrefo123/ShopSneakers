import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //develop my emaol


  nightMode(){
    let bodyNight = document.getElementById('nightMode')

    if(bodyNight!=null)
    bodyNight.classList.toggle('light')
  }
}
