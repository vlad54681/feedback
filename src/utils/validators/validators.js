export const required = (value) => (value ? undefined && 'Enter text..' : "Required");

//let regexp = /[/g;
// export const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
let regexp = /^[0-9() +]{3,10}$/;
export const mustBeNumber = (value) => (!regexp.test(value) ? 'The phone field should be 3-10 chars length and accept numbers, +, () and a space " " char' : undefined)


export const minValue = min => value => {
	if (!value) {
		return undefined
	} else
		if (value.length < min) {
			return `Should be greater than ${min}`
		} return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (!value) {
		return undefined
	} else if (value.length > maxLength) {
		return `Max length is ${maxLength} symbols`;
	} return undefined;
}



export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);


