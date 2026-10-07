import qrcode from 'qrcode-terminal';
import chalk from 'chalk';


async function handle(err, result) {
    if (err) {
        console.log("error on aplication")
        return;
    }
    const isSmall = result.type == 2;
    qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso!"));
        console.log(chalk.green(qrcode));
    })
}

export default handle;