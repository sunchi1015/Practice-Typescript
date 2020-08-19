console.log('merge 2 list of object');

function mergeKpiList(target:any, source:any, prop:string) {
let newList:Array<any> = [];
  source.forEach((sourceElement:any) => {
    const targetElement = target.find((targetEl:any) => {
      return sourceElement[prop] === targetEl[prop];
    });
  const dd =   targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
  newList.push(dd);
  });
  return newList;
}

const list1 = [
  { id: 1, key: 'Sale',isSelected:false },
  { id: 2, key: 'Allocate',isSelected:false }
];

const list2 = [
  { id: 1, key: 'Sale11',isSelected:true },
  { id: 2, key: 'Allocate',isSelected:false }
];

const res = mergeKpiList(list1, list2, 'id');
console.log("merged object --->", res);
