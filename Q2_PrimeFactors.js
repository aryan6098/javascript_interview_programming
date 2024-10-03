
// 2. Prime Factors

const primeFactors = (n) => {

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
        // Check if 'i' is prime (A[i] is 0) and if it divides 'n'
        if(A[i] == 0 && n % i == 0) {
            console.log(i);  // Print the prime factor
        }
    }
}

// Test the primeFactors function with n = 69
primeNumbers(69);