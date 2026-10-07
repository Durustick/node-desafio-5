import chalk from 'chalk';

const promptSchemaCep = [
    {
        name: 'cep',
        description: chalk.green('Digite um cep valido do Brasil'),
        pattern: /^[0-9]{5}-[0-9]{3}$/,
        message: chalk.red('Digite um cep valido do Brasil'),
        required: true

    }
]

export default promptSchemaCep;
