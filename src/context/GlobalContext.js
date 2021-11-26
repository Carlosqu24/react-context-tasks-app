import React, { useState, createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialState = [
            {
                  id: 1,
                  title: "Do the homework",
                  description: "Some description",
                  done: false
            },
            {
                  id: 2,
                  title: "Go to the gym",
                  description: "Some description",
                  done: false
            },
            {
                  id: 3,
                  title: "Cook",
                  description: "Prepare spaghettis",
                  done: false
            },
            {
                  id: 4,
                  title: "Read a book",
                  description: "Read a fabulous book",
                  done: false
            }
      ];

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
      
      const [notes] = useLocalStorage('notes', []);
      const [tasks, setTasks] = useState(notes);
      

      const addTask = (task) => {
            task.id = Date.now();

            setTasks([...tasks, task]);
      };

      const deleteTask = (id) => {
            const newData = tasks.filter(task => task.id != id);

            setTasks(newData);
      };

      const editTask = (editTask) => {
           
            //console.log(editTask)
            const newData = tasks.filter(task => task.id != editTask.id);
            //console.log(newData)
            setTasks([...newData, editTask])
      };

      return (
            <GlobalContext.Provider value={{ tasks, addTask, deleteTask, editTask }} >
                  { children }
            </GlobalContext.Provider>
      )
}
