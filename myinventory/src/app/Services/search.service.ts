import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService{
  result:any;
  constructor(private http:HttpClient) {
    this.result=[];
  }
  searchResult(idata:any,search:any)
  {
    this.result=[];
    var length=search.length;
    for(var i in idata)
    {
       var subString=idata[i].Name.substring(0,length);
       subString=subString.toLowerCase();
       search=search.toLowerCase();
       if(subString==search)
       this.result.push(idata[i]);
    }
    return this.result;
  }
}
