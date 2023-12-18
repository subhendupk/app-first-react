export const getData = () => {
  const data = localStorage.getItem("afr_student_list");
  if (data) {
    return JSON.parse(data);
  }else{
    return [];
  }
}

export const setData = (data) => {
  localStorage.setItem("afr_student_list", JSON.stringify(data))
}

