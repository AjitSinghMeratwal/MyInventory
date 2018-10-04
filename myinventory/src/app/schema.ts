export class Schema{
  Name:string;
  Unit:string;
  Quantity:number;
  Unit_Price:number;
  Total_Amount:number;
  constructor()
  {
    this.Total_Amount=null;
    this.Quantity=null;
    this.Name='';
    this.Unit_Price=null;
    this.Unit='';
  }
}
