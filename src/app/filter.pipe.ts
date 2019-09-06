import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "filter"
})
export class PipeFilter implements PipeTransform{
    transform(value, filterText){
        // console.log(filterText);

        if(!filterText || filterText.length<=0){
            return value;
        }
        // let value1 = [...value];
        value = value.filter((hero)=>{
            return hero.isHuman.toString() === filterText;
        });
        return value;
        // return value;
    }
}