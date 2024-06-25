const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { auth } = require('google-auth-library');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(__dirname, 'token.json');
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const CLIENT_SECRET = path.join(__dirname, 'clientSecret.json');
const spreadsheetId = '1JQRiHT3-BrEmv6LBysrUzAF0_-hHg7l9yv6vUzYFY9k';


/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = auth.fromJSON(require('./clientSecret.json'));
  client.scopes = SCOPES;
  return client
  // let client = await loadSavedCredentialsIfExist();
  // if (client) {
  //   return client;
  // }
  // client = await authenticate({
  //   scopes: SCOPES,
  //   keyfilePath: CREDENTIALS_PATH,
  // });
  // if (client.credentials) {
  //   await saveCredentials(client);
  // }
  // return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function readSheet(range) {
  let auth = await authorize();
  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  // rows.forEach((row) => {
    // Print columns A and E, which correspond to indices 0 and 4.
    // console.log(`${row[0]}, ${row[1]} ${row[2]}`);
  // });
  return rows;
}




async function writeSheet(values, range, overwrite=false) {
  let auth = await authorize();
  const sheets = google.sheets({ version: 'v4', auth });

  const resource = {
    values,
  };
  try {
    if (overwrite) await sheets.spreadsheets.values.clear({spreadsheetId, range})
    const result = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      resource, 
      valueInputOption: 'RAW'
    });
    console.log('%d cells updated.', result.data);
    return result;
  } catch (err) {
    throw err;
  }
}


module.exports =  {
  writeSheet, 
  readSheet
}
