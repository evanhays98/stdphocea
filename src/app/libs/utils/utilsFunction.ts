export function deepEqual<T>(obj1: T, obj2: T): boolean {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1) as (keyof T)[];
    const keys2 = Object.keys(obj2) as (keyof T)[];

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        // If the values are both strings and either is undefined or empty string, consider them equal

        if (value1 === null && (value2 === null || value2 === undefined || value2 === "")) {
            continue;
        }


        if (!keys2.includes(key) || !deepEqual(value1, value2)) {
            return false;
        }
    }

    return true;
}
