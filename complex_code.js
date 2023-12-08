/* 
Filename: complex_code.js
Content: A complex JavaScript code demonstrating various features and functionalities 
related to manipulating arrays, objects, functions, and asynchronous operations.
*/

// Array of user objects
const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    email: 'john@example.com',
    hobbies: ['reading', 'coding'],
    role: 'admin'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 30,
    email: 'jane@example.com',
    hobbies: ['painting', 'gaming'],
    role: 'user'
  },
  // ... more user objects
];

// Function to filter users by role
function filterUsersByRole(role) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredUsers = users.filter(user => user.role === role);
      resolve(filteredUsers);
    }, 2000);
  });
}

// Function to fetch user data from server
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject('User not found!');
      }
    }, 1500);
  });
}

// Function to display user details
function displayUserDetails(user) {
  console.log('User Details:');
  console.log('------------------------');
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
  console.log(`Hobbies: ${user.hobbies.join(', ')}`);
  console.log(`Role: ${user.role}`);
}

// Asynchronous operations using async-await
(async function() {
  try {
    const filteredUsers = await filterUsersByRole('admin');
    for (const user of filteredUsers) {
      const fetchedUser = await fetchUserData(user.id);
      displayUserDetails(fetchedUser);
    }
    console.log('All user details displayed.');
  } catch (error) {
    console.log(error);
  }
})();

// ... more complex code implementing other functionalities