import { Component } from '@angular/core';
import {ContractServiceService} from './contract-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mask';

  constructor(private contractservice:ContractServiceService){

  }

  connectMask(){
    this.contractservice.openMetaMask().then(res=>{
      console.log(res);
    })
  }
  
}
