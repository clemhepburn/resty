export function getMethod() {
  const stringMethod = localStorage.getItem('METHOD');
  if (!stringMethod) return [];
  const parsedMethod = JSON.parse(stringMethod);
  return parsedMethod;
}