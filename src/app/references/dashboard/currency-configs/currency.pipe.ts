import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'EUR', symbolPosition: string = 'left'): any {
    const currencyFormats: any = {
      USD: 'en-US',
      EUR: 'de-DE',
      JPY: 'ja-JP',
      GBP: 'en-GB',
      CAD: 'en-CA',
      CHF: 'de-CH',
      AUD: 'en-AU',
      HKD: 'zh-HK',
      NZD: 'en-NZ',
      SGD: 'en-SG',
      CNY: 'zh-CN',
      INR: 'en-IN',
      KRW: 'ko-KR',
      THB: 'th-TH',
      MYR: 'ms-MY',
      IDR: 'id-ID',
      VND: 'vi-VN',
      PHP: 'fil-PH',
      TWD: 'zh-TW',
      MXN: 'es-MX',
      BRL: 'pt-BR',
      ZAR: 'af-ZA',
      TRY: 'tr-TR',
      RUB: 'ru-RU',
      PLN: 'pl-PL',
      CZK: 'cs-CZ',
      HUF: 'hu-HU',
      SEK: 'sv-SE',
      NOK: 'no-NO',
      DKK: 'da-DK',
      ISK: 'is-IS',
      HRK: 'hr-HR',
      RON: 'ro-RO',
      BGN: 'bg-BG',
      LTL: 'lt-LT',
      LVL: 'lv-LV',
      CYP: 'el-CY',
      ILS: 'he-IL',
      GEL: 'ka-GE',
      RSD: 'sr-RS',
      PKR: 'ur-pk',
    };

    const locale: any = currencyFormats[currencyCode] || 'en-US';
    const formatter: any = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    });

    const parts:any = formatter.formatToParts(value);
    let currencySymbol = '';
    let numberParts = '';

    parts.forEach((part: any) => {
      switch (part.type) {
        case 'currency':
          currencySymbol = part.value;
          break;
        case 'literal':
        case 'integer':
        case 'group':
        case 'decimal':
        case 'fraction':
          numberParts += part.value;
          break;
      }
    });

    if (symbolPosition === 'right') {
      return numberParts + currencySymbol;
    } else {
      return currencySymbol + numberParts;
    }
  }
}
