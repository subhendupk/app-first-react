export const getData = () => {
    const data = localStorage.getItem("after_student_list");
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }


}
export const setData = (data) => {
    localStorage.setItem("after_student_list", JSON.stringify(data))
}