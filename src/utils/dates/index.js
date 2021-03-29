export const getChatTime = date => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = dateNow => {
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth() + 1;
  const date = dateNow.getDate();

  return `${year}-${month}-${date}`;
};
