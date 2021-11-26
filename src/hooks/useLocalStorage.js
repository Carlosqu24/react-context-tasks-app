import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
      const [storedValue, setStoredValue] = useState(() => {
            try {
                  let item = localStorage.getItem(key);
                  return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                  return initialValue;
            };
      });

      const setItem = (value) => {
            try {
                  if (localStorage.getItem(key) == null) {
                        let arrayItems = [];
                        value.id = Date.now();
                        arrayItems.push(value);
                        setStoredValue(value);
                        localStorage.setItem(key, JSON.stringify(arrayItems));
                  } else {
                        let arrayItems = JSON.parse(localStorage.getItem(key));
                        value.id = Date.now();
                        arrayItems.push(value);
                        setStoredValue(value);
                        localStorage.setItem(key, JSON.stringify(arrayItems));
                  };
            } catch (error) {
                  console.log(error);
            }
      };

      const editItem = (value) => {
            try {
                  const arrayItems = JSON.parse(localStorage.getItem(key));

                  const newArrayItems = arrayItems.filter(item => value.id != item.id);

                  localStorage.setItem(key, JSON.stringify([...newArrayItems, value]));

            } catch (error) {
                  console.log(error);
            };
      };

      const deleteItem = (value) => {
            try {
                  const arrayItems = JSON.parse(localStorage.getItem(key));

                  const newArrayItems = arrayItems.filter(item => value != item.id);

                  localStorage.setItem(key, JSON.stringify(newArrayItems));

            } catch (error) {
                  console.log(error);
            };
      };

      return [storedValue, setItem, deleteItem, editItem];
};
