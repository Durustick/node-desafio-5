import prompt from 'prompt';
import PromptSchemaQrcode from '../../prompts-schema/prompts-schema-qrcode.js';
import handle from '../../services/qr-code/handle.js';


async function createQRCode() {
    prompt.get(PromptSchemaQrcode, handle);

    prompt.start();
};

export default createQRCode;
