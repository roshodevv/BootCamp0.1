// Problem Description – fetchWithTimeout(url, ms)

// You are required to write a function named fetchWithTimeout that accepts a URL and a time limit in milliseconds. 
// The function must return a Promise that attempts to fetch data from the given URL.
// If the request completes within the specified time, the Promise resolves with the fetched data. 
// If the operation exceeds the time limit, the Promise rejects with the message "Request Timed Out".

/**
 * Set up two competeing Promises 
 * first returns a fetch Promise
 * second promise returns reject on time (ms) completion
 * finally we use Promise.race([o1 , o2]), whichever resolves first is returned!
 */
function fetchWithTimeout(url, ms) {
  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request Timed Out");
    }, ms);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

function fetchWithTimeoutClean(url, ms) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject("Request Timed Out"), ms)
    )
  ]);
}

module.exports = { fetchWithTimeout, fetchWithTimeoutClean };

// PASSED //
