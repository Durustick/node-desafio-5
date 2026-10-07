import chalk from 'chalk';
import handle from './handle.js';

async function createPassword() {
    console.log(chalk.yellow('Password'));
    const password = await handle();
    console.log(chalk.green(`Seu password é: ${password}`));
}

export default createPassword;