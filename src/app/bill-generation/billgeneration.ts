export class Bill {
   constructor (

      public customerID: string,
      public productID: string,
      public productname: string,
      public producttype: string,
      public price: number,
      public quantity: number,
      public date: string
   ) {  }
}
