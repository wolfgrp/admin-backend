require('dotenv').config();
module.exports = {
  awsRegion: process.env.AWS_REGION,
  awsUserPoolId: process.env.AWS_USER_POOL_ID,
  awsClientId: process.env.AWS_CLIENT_ID,
  sheetId: process.env.GOOGLE_SHEET_ID,
  emailFrom: process.env.EMAIL_FROM
};
