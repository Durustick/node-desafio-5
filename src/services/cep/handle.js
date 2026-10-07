import cep from 'cep-promise';
import chalk from 'chalk';

async function handle(err, result) {
    console.log(chalk.yellow('O cep escolhidpo é: '));
    const cepData = await cep(result.cep);
    console.log(cepData);
}
export default handle;