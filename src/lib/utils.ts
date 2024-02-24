export const validateMinString = (value:unknown, minLength:number) => {
    if(!value || typeof value !== "string" || value.length < minLength){
        return false;
    }
    return true;
}

export const validateMaxString = (value:unknown, maxLength:number) => {
    if(!value || typeof value !== "string" || value.length > maxLength){
        return false;
    }
    return true;
}

export const validateEqLengthString = (value:unknown, eqLength:number) => {
    if(!value || typeof value !== "string" || value.length != eqLength){
        return false;
    }
    return true;
}

export const validateInput = (value: unknown, regex: RegExp): boolean => {
    if (!value || typeof value !== "string") {
        return false;
    }
    return regex.test(value);
}


