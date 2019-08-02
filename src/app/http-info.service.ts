import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInfoService {

  public CurrentInfo;
  public BookInfos;
  public BaseUrl = 'https://anapioficeandfire.com/api/books/';

  public charactersBaseUrl = 'https://anapioficeandfire.com/api/characters/';

  public housesBaseUrl = 'https://anapioficeandfire.com/api/houses/';

  constructor(public http:HttpClient) {
    console.log("Http Info Service Called");
   }


   //Exception Handler

   private handlerError(err: HttpErrorResponse){
     console.log("Handle Http Errors");
     console.log(err.message);
     return Observable.throw(err.message);
     
   }

  /**
   * name
   */
  public GetBooksInfos():any {
    let response = this.http.get(this.BaseUrl)
    //console.log(response);
    return response;
  }

  public GetCharactersInfos():any {
    let response = this.http.get(this.charactersBaseUrl)
    //console.log(response);
    return response;
  }

  public GetHousesInfos():any {
    let response = this.http.get(this.housesBaseUrl)
    //console.log(response);
    return response;
  }


  /**
   * GetSingleInfo */
  public GetSingleInfo(CurrentInfoUrl):any {
    //alert(CurrentInfoUrl);
    debugger;
    let response = this.http.get(CurrentInfoUrl);
  //  this.BookInfos = response.subscribe(
  //     data=>{
  //       this.BookInfos = data;
  //       console.log(data);
  //     },

  //     error=>{
  //       this.BookInfos = error;
  //       console.log("error");
  //     }
  //   );
  //  // console.log(this.BookInfos);
  //   for(let info of this.BookInfos){
  //    // alert(info.url);
  //     console.log(info);
  //     if(CurrentInfoUrl == info.url){
  //         this.CurrentInfo = info;
  //       //  alert(this.CurrentInfo);
  //     }
  //   }

    return response;
  }

   /**
   * IntervalGetSingleInfo */
  public IntervalGetSingleInfo(CurrentInfoUrl):any {
    //alert(CurrentInfoUrl);
    //debugger;
    let response = this.http.get(CurrentInfoUrl);
    return response;
  }
}
