import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentDate'
})
export class CommentDatePipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    const format = args[0] || 'yyyy年MM月dd日 HH:mm'; // オプションが指定されなければ日本語でのフォーマットを有効にする
    return formatDate(value, format, 'en-US');
  }

}
