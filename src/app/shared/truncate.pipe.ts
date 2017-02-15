import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  // descLength:number = 15;
  newString:string= '';
  transform(description:string, descLength:number): string {
    if (description.length > descLength){
     this.newString = description.slice(0, descLength);
     console.log("this.newString =" + this.newString)
    return this.newString;}
    return description;
  }

}
