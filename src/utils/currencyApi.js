const api = 'https://openexchangerates.org/api/currencies.json';

function getCurrencies() {
    // Upload the image to Amazon S3.
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.send(null);
    xhr.onload = function () {
        resolve(xhr.responseText);
    };
    xhr.onerror = function () {
        reject(new Error(`Error during getting list with status: ${xhr.status}`));
    };
  });
}

export {
    getCurrencies
}