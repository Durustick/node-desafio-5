import chalk from 'chalk';
import handle from '../../services/cep/handle.js';
import PromptSchemaCep from '../../prompts-schema/prompts-schema-cep.js';
import prompt from 'prompt';

async function procurarCep() {
    prompt.get(PromptSchemaCep, handle);

    prompt.start();


}



export default procurarCep;