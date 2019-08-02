import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { InfoService } from '../info.service';
import { HttpInfoService } from '../http-info.service';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css'],
  providers: [InfoService,HttpInfoService]
})
export class InfoViewComponent implements OnInit {

  public CurrentInfo;

  public Infos;
  constructor(public _routes: ActivatedRoute, public _router: Router, public  info: InfoService, public HttpInfo: HttpInfoService) { 
    console.log('Constructor Called');
  }

  ngOnInit() {
    console.log('ngOnInit Called');
    let urlID = this._routes.snapshot.paramMap.get('url');

    console.log(urlID);

    //this.CurrentInfo = this.info.GetSingleInfo(urlID);

    this.CurrentInfo = this.HttpInfo.GetSingleInfo(urlID).subscribe(
      
      (data:any)=>{
this.CurrentInfo = [data];
console.log(data);
      },

      error=>{
        console.log(error);
      }
    );
console.log(this.CurrentInfo);

//     //this._router.navigateByUrl('home'); -- To navigate on different page using @angular/router
   }

  // public GetInfo(CurrentUrlID):any {
  //     for(let info of this.Infos){
  //           if(CurrentUrlID == info.url){
  //             this.CurrentInfo = info;
  //           }
  //     }
  // }

}
