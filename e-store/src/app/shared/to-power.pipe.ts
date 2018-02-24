import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "topower"
})
export class ToPowerPipe implements PipeTransform {
  transform(value: any, by: number = 1, changeBy: number = 0): any {
    return Math.pow(value, by) - changeBy;
  }
}
