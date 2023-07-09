import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { CommuteService } from '../commute.service';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit{

  data: string = '';

  constructor(private sharedService: CommuteService) {}

  ngOnInit() {
    this.sharedService.getData().subscribe(data => {
      this.data = data;
    });
  } 

  

}
