import { Pipe, PipeTransform } from '@angular/core';
import {ethers} from "ethers";

@Pipe({
  name: 'formatUnit'
})
export class FormatUnitPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    let decimals:any = 18
    if(args[0]){
      decimals = args[0]
    }

    if(value){
      return Number(ethers.utils.formatUnits(value, decimals))
    }else{
      return 0
    }
  }

}
