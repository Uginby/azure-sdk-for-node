// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-115883067_1-20171002t213150z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2017-10-02T21:34:59.1401171Z\",\"lastBootTime\":\"2017-10-02T21:34:57.4771168Z\",\"allocationTime\":\"2017-10-02T21:31:50.8333435Z\",\"ipAddress\":\"100.74.46.149\",\"affinityId\":\"TVM:tvm-115883067_1-20171002t213150z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2017-10-02T21:34:59.1401171Z\",\"endTime\":\"2017-10-02T21:34:59.2972544Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n  },\"isDedicated\":true\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cda6bde1-4830-40d2-80b3-c91b26f9b5d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:45:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-115883067_1-20171002t213150z\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2017-10-02T21:34:59.1401171Z\",\"lastBootTime\":\"2017-10-02T21:34:57.4771168Z\",\"allocationTime\":\"2017-10-02T21:31:50.8333435Z\",\"ipAddress\":\"100.74.46.149\",\"affinityId\":\"TVM:tvm-115883067_1-20171002t213150z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2017-10-02T21:34:59.1401171Z\",\"endTime\":\"2017-10-02T21:34:59.2972544Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n  },\"isDedicated\":true\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cda6bde1-4830-40d2-80b3-c91b26f9b5d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:45:44 GMT',
  connection: 'close' });
 return result; }]];