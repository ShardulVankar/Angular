import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  public Infos = [
    {
      "url": "https://anapioficeandfire.com/api/books/1",
      "name": "A Game of Thrones",
      "isbn": "978-0553103540",
      "authors": [
        "George R. R. Martin",
        "Shardul Vankar"
      ],
      "numberOfPages": 694,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "1996-08-01T00:00:00"
    },
    {
      "url": "https://anapioficeandfire.com/api/books/2",
      "name": "A Clash of Kings",
      "isbn": "978-0553108033",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 768,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardback",
      "released": "1999-02-02T00:00:00"
    },
    {
      "url": "https://anapioficeandfire.com/api/books/3",
      "name": "A Storm of Swords",
      "isbn": "978-0553106633",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 992,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2000-10-31T00:00:00"
    }
  ]


  public CurrentInfo;

  constructor() { 
    console.log('Info service called');
  }

  /**
   * name
   */
  public getInfo():any {
    return this.Infos;
  }

  public GetSingleInfo(CurrentUrlID):any {
    for(let info of this.Infos){
          if(CurrentUrlID == info.url){
            this.CurrentInfo = info;
          }
    }

    return this.CurrentInfo;
}
}