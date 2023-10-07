export function fetchCount(amount = 1) {
  // Promise: takes a callback function which is the resolve
  return new Promise((resolve) =>
    // Resolve: the data that may or may not be returend
    // so after 500 ms data should ne returned
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
