export function removeElementFromArray<T>(arr: T[], element: T) {
  const index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

export function pushIfNotExists<T>(arr: T[], element: T) {
  if (!arr.some(sub => sub === element)) {
    arr.push(element);
  }
}
