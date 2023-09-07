import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forexConversion'
})
export class ForexConversionPipe implements PipeTransform {

  transform(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    const exchangeRates = {
      USD: 1.126735,
      GBP: 0.876893,
      INR: 79.677056
    };

    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      return (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    } else {
      // Handle unsupported currencies
      return 0;
    }
  }
}
