import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resulSer = [];

    const resulno = [{name: "SIN RESULTADOS"}];

    if(arg.toString().length < 2){
      return;
    }
    
    for(const serie of value){
      if(serie.name.toLowerCase().indexOf(arg.toString().toLowerCase()) > -1)
      resulSer.push(serie);
      
    }
    if(resulSer.length <= 0){
      return resulno;
      
    }
    else{
      return resulSer;

    }
    

  }

}
