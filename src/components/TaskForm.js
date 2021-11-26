import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router';

// CONTEXT
import { GlobalContext } from '../context/GlobalContext'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TaskForm = () => {
      const [notes, setNotes, deleteNote, editNote] = useLocalStorage('notes', []);

      const [form, setForm] = useState({
            id: Date.now()
      })
      const { tasks, addTask, editTask } = useContext(GlobalContext);


      const history = useHistory();
      const { id } = useParams();

      useEffect(() => {
            const taskToEdit = tasks.filter(task => task.id == id);

            setForm(taskToEdit[0])

      }, []);

      const handleInputChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleEditButtonClick = () => {
            editNote(form);
            editTask(form);

            history.push('/');
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            setNotes(form)
            addTask(form); 


            history.push('/');
      };

     

     

      return (
            <form className="form w-50 m-auto mt-5 p-3 text-center" onSubmit={(e) => handleSubmit(e)}>
                  
                  {
                        id ? <h2>Edit Task</h2>
                           : <h3>Create Task</h3>
                  }
                  
                  <div className="form-group">
                        <input 
                              type="text" 
                              className="form-control w-50 my-3 mx-auto" 
                              name="title" 
                              placeholder="Write the title"
                              
                              onChange={handleInputChange}
                        />
                  </div>
                  <div className="form-group">
                        <textarea 
                              type="text" 
                              className="form-control w-50 my-3 mx-auto" 
                              name="description" 
                              placeholder="Write the description"
                              
                              onChange={handleInputChange}
                        >

                        </textarea>
                  </div>
                  {
                        id ?
                              <button type="submit" className="btn btn-primary" onClick={handleEditButtonClick}>
                                    Edit Task
                              </button>
                        :
                              <button type="submit" className="btn btn-primary">
                                    Save Task
                              </button>
                  }
            </form>
      )
}
