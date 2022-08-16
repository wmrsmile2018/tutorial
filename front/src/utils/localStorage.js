// кладет занчение по ключу в localStorage
export const setItem = (key, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};

// достает всю инфу из localStorage
export const getStorage = () => {
  return localStorage;
};

// очищает все что есть в localStorage
export const clearStorage = () => {
  localStorage.clear();
};

// очищает по ключу в localStorage
export const removeItem = (key) => {
  localStorage.removeItem(key);
};

// достает по ключу из localStorage
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
