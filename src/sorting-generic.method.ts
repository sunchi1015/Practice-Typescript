// type tt = number | string;
// interface SortType<T> {
//   tt: T;
// }
class SortingGeneric {
  constructor() {}

  public sortAlphabetically<T>(filterList: T[]): T[] {
    const filterMap: any[] = [];
    const sortedFilters: T[] = [];

    // Create Map with translated values
    filterList.forEach((attributeName: T) => {
      // filterMap.push([attributeName, this.translate.instant(attributeName, attributeName)]);å
      filterMap.push([attributeName, attributeName]);
    });

    // Sort map based on translated values
    filterMap.sort(this.alphaSort);

    // Return correctly ordered List with attributeNames only
    filterMap.forEach((filter: any) => {
      sortedFilters.push(filter[0]);
    });

    return sortedFilters;
  }

  alphaSort = <M extends string[], N extends string[]>(a: M, b: N) => {
    // return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
    const res = a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    return res;
  };
}

const p1 = new SortingGeneric();
const sortgen = ['Store', 'Grade', 'Region', 'Enterprise'];
// const sortgen = [2, 4, 5, 7, 8, 1, 0, 6];
const sortedArr = p1.sortAlphabetically<string>(sortgen);

console.log('Sorted Arrya --->', sortedArr);
