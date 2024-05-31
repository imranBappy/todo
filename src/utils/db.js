export const dbRead = () => {
  if (!process.browser) return [];
  const JSONData = localStorage.getItem(process.env.NEXT_PUBLIC_DB_NAME);
  if (!JSONData) return false;
  const todos = JSON.parse(JSONData);
  return todos?.todos || [];
};

export const dbWrite = (data) => {
  if (!process.browser) return false;

  if (!data) return false;
  const JSONData = JSON.stringify(data);
  localStorage.setItem(process.env.NEXT_PUBLIC_DB_NAME, JSONData);
  return true;
};
