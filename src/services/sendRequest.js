const queryString = queries => encodeURIComponent(
  Object.entries(queries).reduce((acc, [key, val]) => (
    `${acc}${((acc === '?') ? '' : '&')}${key}=${val}`
  ), '?')
);

const sendRequest = async (
  url,
  queries = {},
  data = {}
) => (
  await fetch(url + queryString(queries), data)
    .then(resp => resp)
    .catch(err => console.log('Hmmm... Looks like there\'s an issue:' + err))
);

export default sendRequest;