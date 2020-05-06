import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarTitleService } from 'src/app/services/nav-bar-title.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentTitle: string;

  constructor(
    private router: Router,
    private titleServ: NavBarTitleService
  ) { }

  ngOnInit() {
    this.titleServ.currentTitle$.subscribe((title) =>{
      this.currentTitle = title
    })
  }

  navToHome(){
    this.router.navigate(['/'])
  }

}
