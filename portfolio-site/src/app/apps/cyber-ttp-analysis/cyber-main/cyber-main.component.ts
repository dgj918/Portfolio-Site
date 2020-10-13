import { Component, OnInit } from '@angular/core';
import { CyberTtpServiceService } from '../services/cyber-ttp-service.service';

@Component({
  selector: 'app-cyber-main',
  templateUrl: './cyber-main.component.html',
  styleUrls: ['./cyber-main.component.scss']
})
export class CyberMainComponent implements OnInit {

  constructor(private cyberService: CyberTtpServiceService) { }

  ngOnInit(): void {
    this.cyberService.getTopHundred().subscribe((data) =>{
      console.log(data)
    })
  }

}
