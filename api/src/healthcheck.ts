import config from 'config';
import http from 'http';

const options: http.RequestOptions = {
  host: '127.0.0.1',
  port: config.get('STATUS_PORT'),
  path: '/status',
  timeout: 2000,
};

const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode == 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', () => {
  console.log('ERROR');
  process.exit(1);
});

request.end();