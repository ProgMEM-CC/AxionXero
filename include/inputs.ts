import { select,input } from "@inquirer/prompts";



function showAskSelect(message:string,choices:string[],defaultValue?:string){
    return select({
        message,
        choices,
        default:defaultValue
    })
}


function showAskTextInput(message:string,defaultValue?:string){
    return input({
        message,
        default:defaultValue
    })
}

function showAskNumberInput(message:string,defaultValue?:number){
    return input({
        message,
        default:defaultValue?.toString(),
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter(value) {
            return Number(value);
        }
    })
}

export {
    showAskSelect,
    showAskTextInput,
    showAskNumberInput
}