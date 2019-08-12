import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

const FILE_SIZE_UNIT = ['B', 'KB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNIT_LONG = [
  'Bytes',
  'Kilobytes',
  'Megabytes',
  'Gigabytes',
  'Pettabytes',
  'Exabytes',
  'Zettabytes',
  'Yottabytes'
];

@Pipe({
  name: 'formatFileSize',
  pure: false
})
export class FormatFileSizePipe implements PipeTransform {
  longForm: boolean;
  formattedSize: string;
  transform(sizeInBytes: number, longForm: boolean, name: string): string {
    console.log('size in bytes', sizeInBytes);
    console.log('long form', longForm);
    console.log('name', name);
    this.longForm = longForm;
    const units = this.longForm ? FILE_SIZE_UNIT_LONG : FILE_SIZE_UNIT;

    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);

    const size = sizeInBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100) / 100;
    const unit = units[power];
    this.formattedSize = `${formattedSize} ${unit}`;

    return this.formattedSize;
  }
}
