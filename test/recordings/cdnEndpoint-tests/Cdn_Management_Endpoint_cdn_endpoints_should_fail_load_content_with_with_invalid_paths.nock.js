// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819039\",\"not_before\":\"1459815139\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM5LCJuYmYiOjE0NTk4MTUxMzksImV4cCI6MTQ1OTgxOTAzOSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.j5ZDrOAC366n8Z_DMHXcUXPq_-LZDDq5QAH3EHqeKQbvnuuS7tRdc4fnbAP1MZ2WQFB5fXlGdOCv4pfAG82gycy0ZTBkIbPz4KsjFEKujBbUrdMBp-5n9kRkc2qZgSGK6ywXldlG85TyfvTdTmpUeNJH9y7bAiNWlMUSPEGsfoYmYLHlFw4Xg3e17fhlJO-1D7_g6dT1Fy7iWYjmEYtYb8W5goZYFezwMVY2NI7uiXJcjk8_kZ8-XG7bICstrY0XOtRCcUf07_JqOhixW3HqfeALZm0mouy5r3CQhDw5lLbT1brROg6JgQgTpbwGWHJF4XyMIndqlOLaw85YWQOygQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a6e5faae-5022-45fe-9b87-2ca5446bac24',
  'client-request-id': '492e330a-c5a5-4abe-b828-c6697877f74c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_158',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:19 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819039\",\"not_before\":\"1459815139\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM5LCJuYmYiOjE0NTk4MTUxMzksImV4cCI6MTQ1OTgxOTAzOSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.j5ZDrOAC366n8Z_DMHXcUXPq_-LZDDq5QAH3EHqeKQbvnuuS7tRdc4fnbAP1MZ2WQFB5fXlGdOCv4pfAG82gycy0ZTBkIbPz4KsjFEKujBbUrdMBp-5n9kRkc2qZgSGK6ywXldlG85TyfvTdTmpUeNJH9y7bAiNWlMUSPEGsfoYmYLHlFw4Xg3e17fhlJO-1D7_g6dT1Fy7iWYjmEYtYb8W5goZYFezwMVY2NI7uiXJcjk8_kZ8-XG7bICstrY0XOtRCcUf07_JqOhixW3HqfeALZm0mouy5r3CQhDw5lLbT1brROg6JgQgTpbwGWHJF4XyMIndqlOLaw85YWQOygQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a6e5faae-5022-45fe-9b87-2ca5446bac24',
  'client-request-id': '492e330a-c5a5-4abe-b828-c6697877f74c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_158',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:19 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807/load?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"/movies/*\\\". ContentPath for load action must be a relative path for a single resource \\\"/path/pic.jpg\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '196',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '00799ba0-cdd0-422a-b8d6-b0f999608a08',
  'x-ms-client-request-id': '674bf662-86e9-4de9-86df-4e274ce8a861',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'baf8abd7-4570-4326-acb1-b396d11ea5b0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001720Z:baf8abd7-4570-4326-acb1-b396d11ea5b0',
  date: 'Tue, 05 Apr 2016 00:17:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807/load?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"/movies/*\\\". ContentPath for load action must be a relative path for a single resource \\\"/path/pic.jpg\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '196',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '00799ba0-cdd0-422a-b8d6-b0f999608a08',
  'x-ms-client-request-id': '674bf662-86e9-4de9-86df-4e274ce8a861',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'baf8abd7-4570-4326-acb1-b396d11ea5b0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001720Z:baf8abd7-4570-4326-acb1-b396d11ea5b0',
  date: 'Tue, 05 Apr 2016 00:17:20 GMT',
  connection: 'close' });
 return result; }]];