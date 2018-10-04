import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetserviceService {

  constructor(private http:HttpClient) {
  }
  getJSON()
  {

    return this.http.get("./assets/login.json")

  }
  getInv()
  {
    return this.http.get("./assets/inventory.json")
  }

}
