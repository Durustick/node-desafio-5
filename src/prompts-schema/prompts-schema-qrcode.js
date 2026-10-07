import chalk from 'chalk';

const PromptSchemaQrcode = [
    {
        name: "link",
        description: chalk.green("Digite o link para gerar o QR Code"),
    },
    {
        name:"type",
        description: chalk.blue("Escolha o tipo de QR Code (1 - Normal  ou  2 - terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 ou 2"),
        required: true
    }
]

export default PromptSchemaQrcode;