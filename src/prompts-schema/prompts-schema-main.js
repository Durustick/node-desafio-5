import chalk from 'chalk';

const promptSchemaMain = [ 
    {
        name: 'select',
        description: chalk.green('Escolha a ferramenta (1 - QRCODE  ou  2 - PASSWORD  ou  3 - CEP)'),
        pattern: /^[1-3]+$/,
        message: chalk.red('Escolha 1,2 ou 3'),
        required: true
    }
]

export default promptSchemaMain;