export const nullCheck = (value: any) => {
	return value || value === '' ? value : null;
};

export const capitalize = (string: string): string => {
	return string.toUpperCase();
};

export const getIsoTimezone = (date: Date) => {
	const offset = date.getTimezoneOffset();
	date = new Date(date.getTime() - offset * 60 * 1000);
	return date.toISOString().split('T')[0];
};

let timeout: any;
export const debounce = (func: () => void, timeoutValue = 250) => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		func();
	}, timeoutValue);
};
