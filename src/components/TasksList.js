import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// CONTEXT
import { GlobalContext } from '../context/GlobalContext'


export const TasksList = () => {

      const { tasks, deleteTask } = useContext(GlobalContext)


      return (
            <div className="p-3">

                  <div className="row">
                        {
                              tasks.map(task => (
                                    <div className="col-md-4" key={task.id}>
                                          <div className="card p-3 my-3" >
                                                <h2>{task.title}</h2>
                                                <p>{task.description}</p>

                                                <div className="btn-group">
                                                      <Link 
                                                            to={`edit/${task.id}`}
                                                            className="btn btn-dark"
                                                      >Edit Task</Link>

                                                      <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                                                            Delete Task
                                                      </button>
                                                </div>
                                          </div>
                                    </div>

                              ))
                        }
                  </div>

            </div>
      )
}
