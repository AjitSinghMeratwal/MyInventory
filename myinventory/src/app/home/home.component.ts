import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AsyncLocalStorage} from "angular-async-local-storage";
import {GetserviceService} from "../Services/get-service.service";
import {Schema} from "../schema"
import {SearchService} from "../Services/search.service"
import {log} from "util";
import{DialogService} from "../Services/dialog.service";

@Component({
  selector: 'app-home',
    moduleId: module.id.toString(),
  templateUrl: './home.component.html',
styleUrls:['./home.component.css'],

 providers: [GetserviceService,Schema,SearchService,DialogService],
})
export class HomeComponent implements OnInit {
  searchText:any;
  inv_data:any;
  inv_data_copy:any;
  selected_row:any;
  selected_option:any;
  save:boolean;
  userlogged:any;
  selected:any;
  constructor(public schema:Schema ,private getservice: GetserviceService,private searchService:SearchService,private modalService: DialogService,public router:Router) {

  this.getservice.getInv().subscribe(data =>{
      this.idata(data);
    })

  this.selected='';
  this.userlogged=window.localStorage.getItem('name');

  if(this.userlogged=='')
  {
    this.router.navigate(['/']);
  }
  }
selectoption(value:any){
    this.selected=value;
  }

  logout()
{
  window.localStorage.setItem('name','');
  this.router.navigate(['app/login']);
}
ngOnInit()
{
  this.searchText = '';
}

search(event)
{
  console.log(this.inv_data)
  var result=this.searchService.searchResult(this.inv_data_copy,this.searchText);
  this.inv_data=result;
}

idata(data:any)
{
  this.inv_data=data.idata;
  this.inv_data_copy=data.idata;
}

delete(i: any, j: any)
 {
  console.log(i);
  console.log(j);
  var result = confirm("Are you sure you want to delete??");
  if (result) {
    this.inv_data.splice(j, 1);
  }
}

onSelect(idata:any,index:any)
{
  this.selected_row=index;
}


addModal(id: string)
{
        this.selected_option='New Inventory';
        this.schema=new Schema();
        this.modalService.open(id);
}

  edit(idata:any,j:any)
  {
    this.selected_option='Edit Inventory';
    this.schema=this.inv_data[j];
    console.log(this.schema);
     this.modalService.open('modal-popup');
  }
  saveModal(id: string,b:boolean){
    this.save=true;
    console.log('hello');
      if(this.schema.Name!=''&&this.schema.Unit!=''&&this.schema.Unit_Price!=null&&this.schema.Quantity!=null)
     {
       if((this.schema.Quantity<1)||(this.schema.Unit_Price<1)) {
            alert('Quantity & UnitPrice must be greater than 0')
     }
      else
      {
        this.modalService.close(id,b);
      }
    }
      else
      {
        alert('fill form completly');
      }

  }
  closeModal(id:string)
  {
    this.save=false;
    this.modalService.close(id,true);
  }

  final(b:boolean)
  {
    if(this.save)
    {
        this.schema.Total_Amount=((this.schema.Unit_Price)*(this.schema.Quantity));
        if(this.selected_option=='New Inventory')
        {
          this.inv_data.push(this.schema);
          console.log(this.inv_data_copy);
            console.log(this.inv_data);

        }
    }
    this.inv_data_copy=this.inv_data;
  }


}
