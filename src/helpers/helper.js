const timeFilter = (data) => {
   const result = data.list.filter(item => item.dt_txt.endsWith("12:00:00"));
    return result;
};

export {timeFilter};