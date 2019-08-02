import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from '../info.service';
import { HttpInfoService } from '../http-info.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [InfoService, HttpInfoService]
})
export class HomeComponent implements OnInit, OnDestroy {
 
  public BookInfos;

  public CharactersInfos;
 
  public HousesInfos;
  
  ngOnDestroy(): void {
    console.log('Destroy called');
  }

  
  constructor(public info: InfoService, public HttpInfo: HttpInfoService) {
    console.log('Home constructor called');
    

   }

  
  ngOnInit() {
    console.log('Home init called');
    // this.Infos = this.info.getInfo();
    // console.log(this.Infos);

    //  this.BookInfos = this.HttpInfo.GetInfos();
    //  console.log(this.BookInfos);

     this.BookInfos = this.HttpInfo.GetBooksInfos().subscribe (

       (data: any) => {
         // console.log(data);
         this.BookInfos = data;
        },

        error => {
          console.log(error);
        }
     )

     this.CharactersInfos = this.HttpInfo.GetCharactersInfos().subscribe (

      (data: any) => {
        // console.log(data);
        this.CharactersInfos = data;
       },
  
       error => {
         console.log(error);
       }
    )
  
   
  
  this.HousesInfos = this.HttpInfo.GetHousesInfos().subscribe (
  
    (data: any) => {
      // console.log(data);
      this.HousesInfos = data;
     },
  
     error => {
       console.log(error);
     }
  )

     console.log(this.BookInfos);
  }
}
