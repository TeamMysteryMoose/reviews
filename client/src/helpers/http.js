/* global fetch:true
*/

function get(url) {
  return fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json());
}

export default get;
