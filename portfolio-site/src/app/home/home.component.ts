import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarTitleService } from '../services/nav-bar-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentTitle: string

  constructor(
    private router: Router,
  ) { 
    this.currentTitle = "Garrett Johnson"
  }

  ngOnInit() {

  }

  navToHeadache(){
    console.log("clicked")
    this.router.navigate[('/headache')]
  }

  navToHome(){
    this.router.navigate(['/'])
  }

}
