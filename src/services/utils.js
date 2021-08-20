import { string } from "prop-types";

export function getMethod() {
  const stringMethod = localStorage.getItem('METHOD');
  if (!stringMethod) return [];
  const parsedMethod = JSON.parse(stringMethod);
  return parsedMethod;
}

export function setMethod(parsedMethod) {
  const methods = localStorage.getItem('METHOD');
  let methodContent;

  if (methods) {
    const currentData = JSON.parse(methods);
    methodContent = currentData;
  } else {
    methodContent = [];
  }

  methodContent.push(parsedMethod);
  const updatedData = JSON.stringify(methodContent);
  localStorage.setItem('METHOD', updatedData);
}

export function getUrl() {
  const stringUrl = localStorage.getItem('URL');
  if (!stringUrl) return [];
  const parsedUrl = JSON.parse(stringUrl);
  return parsedUrl;
}

export function setUrl(parsedUrl) {
  const locations = localStorage.getItem('URL');
  let urlContent;

  if (locations) {
    const currentData = JSON.parse(locations);
    urlContent = currentData;
  } else {
    urlContent = [];
  }

  urlContent.push(parsedUrl);
  const updatedData = JSON.stringify(urlContent);
  localStorage.setItem(updatedData);
}