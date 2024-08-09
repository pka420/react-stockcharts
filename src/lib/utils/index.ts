export * from "./withDeviceRatio";
export * from "./withSize";


export function last<T>(array: T[] | undefined, accessor?: (item: T) => any): T | undefined {
	if (accessor && array) {
		let value: T;
		for (let i = array.length - 1; i >= 0; i--) {
			value = array[i];
			if (isDefined(accessor(value))) return value;
		}
		return undefined;
	}
	const length = array ? array.length : 0;
	return length ? array[length - 1] : undefined;
}

export function isDefined<T>(d: T | null | undefined): d is T {
	return d !== null && typeof d !== "undefined";
}

export function isNotDefined<T>(d: T | null | undefined): d is null | undefined {
	return !isDefined(d);
}

export function isObject<T>(d: T): d is Record<string, unknown> {
	return isDefined(d) && typeof d === "object" && !Array.isArray(d);
}

export const isArray = Array.isArray;

