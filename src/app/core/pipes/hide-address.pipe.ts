import { Pipe, PipeTransform } from '@angular/core';
import {ethers} from "ethers";

@Pipe({
  name: 'hideAddress'
})
export class HideAddressPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!ethers.utils.isAddress(value)) return value
    if(value){
      let frontLength:any = args[0]
      let backLength:any = args[1]
      if(frontLength == undefined) frontLength = 4
      if(backLength == undefined) backLength = 4
      return value.replace(value.substring(frontLength, (value ? value.length : 42) - backLength ), "...");
    }else{
      return ''
    }
  }

}
