// Create and export an instance of WeakMap
export const weakMap = new WeakMap();

// Function to track the number of times an endpoint is called
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    // Initialize count to 0 if the endpoint is not yet tracked
    weakMap.set(endpoint, 0);
  }

  // Increment the count
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // If the number of queries is 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

