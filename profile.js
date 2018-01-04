const https = require('https');
// const username = 'chalkers';

const http = require('http');
// print error messages

function printError(error){
  console.log(error.message);
}

function printMessage(username, badgeCount, point){
  const  message =`${username} has ${badgeCount} total badges(s) and ${point} points in JavaScript`;
  console.log(message);
}


// printMessage("chalkers", 25, 200000);

function get(username){

try{
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  // console.log(response.statusCode);
  // Read data

  if(response.statusCode === 200){
  let body = "";
  response.on('data', data => {
    body += data.toString();
  });
  response.on('end', () => {
    // Parse data
    try{
    const profile = JSON.parse(body);
    // console.dir(profile);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  }catch (error){
    printError(error);
  }
  });

}else{
  const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
  const statusCodeError = new Error(message);
  printError(statusCodeError);
}
  // Print data
});

request.on('error', error => printError);
} catch(error){
  printError(error);
}
}

module.exports.get = get;
