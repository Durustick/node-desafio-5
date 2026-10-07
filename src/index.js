import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompts-schema-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';
import procurarCep from './services/cep/create.js';

async function main() {

    prompt.get(promptSchemaMain, async (err, result) => {

        if (err) console.log(err);
        if (result.select == 1) await createQRCode();
        if (result.select == 2) await createPassword();
        if(result.select == 3) await procurarCep();
    });
    prompt.start();

}
main();