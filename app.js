// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
// const username = 'chalkers';
function printMessage(username, badgeCount, point){
  const  message =`${username} has ${badgeCount} total badges(s) and ${point} points in JavaScript`;
  console.log(message);
}


// printMessage("chalkers", 25, 200000);

function getProfile(username){

try{
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  // console.log(response.statusCode);
  // Read data
  let body = "";
  response.on('data', data => {
    body += data.toString();
  });
  response.on('end', () => {
    // Parse data
    const profile = JSON.parse(body);
    // console.dir(profile);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  });


  // Print data
});

request.on('error', error => console.error(`Problem with request:  ${error.message}`));
} catch(error){
  console.error(error.message);
}
}
const users = process.argv.slice(2);


users.forEach(getProfile);
