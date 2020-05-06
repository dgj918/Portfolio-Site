import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarTitleService } from '../services/nav-bar-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private navBarTitleServ: NavBarTitleService
  ) { }

  ngOnInit() {
    this.navBarTitleServ.changeTitle('Home')
  }

  navToHeadache(){
    console.log("clicked")
    this.router.navigate[('/headache')]
  }

}
