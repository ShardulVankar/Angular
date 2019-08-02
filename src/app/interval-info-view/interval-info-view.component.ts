import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { InfoService } from '../info.service';
import { HttpInfoService } from '../http-info.service';


@Component({
  selector: 'app-interval-info-view',
  templateUrl: './interval-info-view.component.html',
  styleUrls: ['./interval-info-view.component.css']
})
export class IntervalInfoViewComponent implements OnInit {

  public CurrentInfo;
  constructor(public _routes: ActivatedRoute, public _router: Router, public  info: InfoService, public HttpInfo: HttpInfoService) { 
    console.log('Constructor Called');
  }

  ngOnInit() {
   // debugger;

   
    let urlID = this._routes.snapshot.paramMap.get('character');

    console.log("urlID: " + urlID);

    this.CurrentInfo = this.HttpInfo.IntervalGetSingleInfo(urlID).subscribe(
      data=>{
        this.CurrentInfo = [data];
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
