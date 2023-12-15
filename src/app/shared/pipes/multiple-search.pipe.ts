import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipleSearch',
  standalone: true
})
export class MultipleSearchPipe implements PipeTransform {
  transform(items: any[], filters: { key: string, value: string }[]): any[] {
    if (!items || !filters || filters.length === 0) {
      return items;
    }

    return items.filter(item => {
      return filters.every(filter => {
        const propValue = item[filter.key];

        // Check if the property value is defined and not null
        if (propValue !== undefined && propValue !== null) {
          // Convert the property value to a string (for consistent comparison)
          const propString = propValue.toString().toLowerCase();
          return propString.includes(filter.value.toLowerCase());
        }

        // If the property value is undefined or null, consider it a non-match
        return false;
      });
    });
  }
}