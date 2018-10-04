import { Component, OnInit } from '@angular/core';
import {GetserviceService} from '../Services/get-service.service';
import { DialogService } from '../Services/dialog.service';
import {Router} from "@angular/router";
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {HomeComponent} from "../home/home.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`

    html {
      height: 100%;


    }
  .page-footer
  {
    padding-top:20px;color:#fff;
    background-color:#5c6bc0;

  }
    /* Place drawer and content side by side. */
    .demo-body {
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }

    /* Stack toolbar and main on top of each other. */
    .demo-content {
      display: inline-flex;
      flex-direction: column;
      flex-grow: 1;
      height: 100%;
      box-sizing: border-box;
    }
    body {
       display: flex;
       min-height: 100vh;
       flex-direction: column;
     }

     main {
       flex: 1 0 auto;
     }
     main.container
     {
       width: 50%;
     }
    .demo-main {
      padding: 16px;
    }
    .mdc-card__media-content {
      background-color:#ffff8d;
      font-size: xx-large;
  }
  .mdc-card__media {
      background-color:#ffff8d;
      border: 1px;
  }
  .row {
      margin-bottom: 0px;
  }
  form.col.s12 {
      padding-top: 20px;
  }
  .row .col.s12 {
      width: 95%;
      margin-left: 10px;
  }
  a.waves-effect.waves-light.btn {
      margin-left: 38%;
      position: relative;
      margin-bottom: 20%;
      margin-top: 5%;
  }
  .page-footer{
     bottom: 0;
     width: 100%;
     position: absolute; (or fixed);
         padding-left: 35%;
  }
  .mdc-toolbar__section{
    height:0%;
  }
`],
providers:[GetserviceService,DialogService],
})
export class LoginComponent implements OnInit {
  email_id:any;
    password_id:any;
    jsondata:any;
    k=0;
    index:any;
    constructor(public getservice:GetserviceService,public router:Router,public localstorage:AsyncLocalStorage) {
      this.getservice.getJSON().subscribe(data =>{
        this.logindata(data);
      })
    }
    logindata(data:any)
    {
      this.jsondata=(data.details);
    }
    submit()
    {

      for(var i in this.jsondata)
      {
        if((this.jsondata[i].emailid==this.email_id) && (this.jsondata[i].password==this.password_id))
        {
          this.k++;
          this.index=i;
          break;
        }
      }
      console.log(this.k);
      if(this.k==0)
      {
        alert('Invalid Credentials!!');

      }
      else
      {
        window.localStorage.setItem('name',this.jsondata[this.index].name);

        this.router.navigate(['/app/inventory']);


      }
    }

    ngOnInit() {
    }

  }
