export const getData = () => {
    const data = localStorage.getItem('myStudentList');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}
export const setData = (data) => {
    localStorage.setItem('myStudentList', JSON.stringify(data));
}