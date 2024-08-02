import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'EUR', symbolPosition: string = 'left'): any {
    const currencyFormats: any = {
      USD: 'en-US',  // United States
      EUR: 'de-DE',  // Germany (Eurozone)
      JPY: 'ja-JP',  // Japan
      GBP: 'en-GB',  // United Kingdom
      CAD: 'en-CA',  // Canada
      CHF: 'de-CH',  // Switzerland
      AUD: 'en-AU',  // Australia
      HKD: 'zh-HK',  // Hong Kong
      NZD: 'en-NZ',  // New Zealand
      SGD: 'en-SG',  // Singapore
      CNY: 'zh-CN',  // China
      INR: 'en-IN',  // India
      KRW: 'ko-KR',  // South Korea
      THB: 'th-TH',  // Thailand
      MYR: 'ms-MY',  // Malaysia
      IDR: 'id-ID',  // Indonesia
      VND: 'vi-VN',  // Vietnam
      PHP: 'fil-PH',  // Philippines
      TWD: 'zh-TW',  // Taiwan
      MXN: 'es-MX',  // Mexico
      BRL: 'pt-BR',  // Brazil
      ZAR: 'af-ZA',  // South Africa
      TRY: 'tr-TR',  // Turkey
      RUB: 'ru-RU',  // Russia
      PLN: 'pl-PL',  // Poland
      CZK: 'cs-CZ',  // Czech Republic
      HUF: 'hu-HU',  // Hungary
      SEK: 'sv-SE',  // Sweden
      NOK: 'no-NO',  // Norway
      DKK: 'da-DK',  // Denmark
      ISK: 'is-IS',  // Iceland
      HRK: 'hr-HR',  // Croatia
      RON: 'ro-RO',  // Romania
      BGN: 'bg-BG',  // Bulgaria
      LTL: 'lt-LT',  // Lithuania
      LVL: 'lv-LV',  // Latvia
      CYP: 'el-CY',  // Cyprus
      ILS: 'he-IL',  // Israel
      GEL: 'ka-GE',  // Georgia
      RSD: 'sr-RS',  // Serbia
      PKR: 'ur-PK',  // Pakistan,
      LKR: 'ta-LK'   // Sri Lanka
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
      console.log('expected:',new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(value),'actual',numberParts + currencySymbol)
      return numberParts + currencySymbol;
    } else {
      console.log('expected:',new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(value),'actual',currencySymbol + numberParts)
      return currencySymbol + numberParts;
    }
  }
}
