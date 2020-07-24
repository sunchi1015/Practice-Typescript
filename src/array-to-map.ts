console.log('array to map --');

export const AvailableAttributes = [
  { id: 3, label: 'Min' },
  { id: 4, label: 'Max' },
  { id: 5, label: 'RAQ' },
  { id: 6, label: 'Invt.Pos' }
];

const nMap = new Map<string, any>();

AvailableAttributes.forEach(el => nMap.set(`${el.id}`, el));

console.log('mpa added some data --->', nMap.get('3'));
console.log('mpa added some data size --->', nMap.size);

// console.log('get some value from map --->', nMap.get(3)['label']);
