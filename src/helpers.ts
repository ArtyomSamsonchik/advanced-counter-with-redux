export const getFromStorage = <T>(key: string, initData: T): T => {
    const dataAsString = localStorage.getItem(key);
    return dataAsString ? JSON.parse(dataAsString) as T : initData;
};

export const saveToStorage = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getInputsErrors = (minvalue: number, maxvalue: number) => {
    let minValueError = false, maxValueError = false;

    if (maxvalue <= minvalue || maxvalue < 1) {
        maxValueError = true;
    }
    if (minvalue < 0) {
        minValueError = true;
    }

    return {maxValueError, minValueError};
};