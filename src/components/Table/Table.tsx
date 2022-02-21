import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiService from "../../services/api/api";
import {
  setAllTasks,
  deleteTask,
  editTask,
} from "../../services/store/actions/tasksActions";
import AddTask from "../AddTask/AddTask";
import Button from "../UI/Form/Button/Button";

const Table: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const tasks = useSelector((state: any) => state.tasks.tasks);

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllTasks());
  }, []);

  const deleteTaskHandler = (id: any) => {
    dispatch(deleteTask(id));
  };

  const editTaskHandler = async (id: number) => {
    dispatch(editTask(id));
  };

  return (
    <div>
      <div className="add-task-form">
        <AddTask isEdit={isEdit} />
      </div>
      <hr />
      <div>
        <h6>search by title</h6>
        <input
          type="text"
          placeholder={`filter by title`}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="table-content">
        <table className="table">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((val: any) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.title.includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((task: any) => {
                return (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td className="d-flex justify-content-around align-items-center">
                      <Button
                        name="edit"
                        saveData={() => {
                          setIsEdit(true);
                          editTaskHandler(task.id);
                        }}
                      />
                      <Button
                        name="delete"
                        saveData={() => {
                          deleteTaskHandler(task.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
