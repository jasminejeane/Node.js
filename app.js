// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
const username = 'chalkers';
function printMessage(username, badgeCount, point){
  const  message =`${username} has ${badgeCount} total badges(s) and ${point} points in JavaScript`;
  console.log(message);
}


// printMessage("chalkers", 25, 200000);


const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  // console.log(response.statusCode);
  // Read data
  response.on('data', data => {
    console.log('data', data);
  });
  // Parse data
  // Print data
})

// Connect to API  URL
// Read data
// Parse data
// Print data
