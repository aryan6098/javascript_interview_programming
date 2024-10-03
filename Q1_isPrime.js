// 1. check Prime


// first Method  T>C-> O(√n)
function isPrime(n){
    let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i == n / i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }
    if (count == 2) {
      return true;
    } else {
      return false;
    }
};



// Second Method (Sieve of Frasthosthenes Algorithem )

// T>C->  O(n log log n) — efficient for finding all primes up to n
function isPrimeSieveAlgo(n) {
    // Create an array 'A' of size n+1, initialized with 0 (used to mark non-prime numbers)
    let A = new Array(n + 1).fill(0);
        // Mark non-prime numbers using Sieve of Eratosthenes
    for(let i = 2; i * i <= n; i++) {
        // If A[i] is 0, then 'i' is prime
        if(A[i] == 0) {
            // Mark all multiples of 'i' as non-prime
            let j = i * i;
            while(j <= n) {
                A[j] = 1; // Mark as non-prime
                j = j + i;
            }
        }
    }

    for(let i = 2 ; i < n; i++) {
        // Check if 'i' is prime 
        if(A[i] == 0 ) {
            console.log(i);  // Print the prime factor
        }
    }
}

console.log(isPrime(16));
isPrimeSieveAlgo(15);

