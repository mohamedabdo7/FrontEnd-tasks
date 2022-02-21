import { Formik, FormikProps } from "formik";
import React, { useState } from "react";
import Button from "../UI/Form/Button/Button";
import Input from "../UI/Form/Input/Input";
import ApiService from "../../services/api/api";

import formValidationSchema from "./FormValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllTasks,
  addTask,
  confirmEdit,
} from "../../services/store/actions/tasksActions";

type Props = {
  isEdit?: boolean;
};

const AddTask: React.FC<Props> = ({ isEdit }) => {
  const [addTaskForm, setAddTaskForm] = useState<any>({
    id: "",
    title: "",
    description: "",
  });

  const currentTask = useSelector((state: any) => state.tasks.currentTask);

  const dispatch = useDispatch();

  const addTaskHandler = (values: any) => {
    dispatch(addTask(values.id, values.title, values.description));
  };

  const editTaskHandler = (id: number, title: string, description: string) => {
    dispatch(confirmEdit(id, title, description));
    dispatch(setAllTasks());
    isEdit = false;
  };

  const onChangeInputValue = (value: string, fieldName?: string) => {
    if (!fieldName) return;
    if (fieldName === "title") {
      setAddTaskForm({
        ...addTaskForm,
        [fieldName]: value,
      });
    }
    if (fieldName === "description") {
      setAddTaskForm({
        ...addTaskForm,
        description: value,
      });
      console.log("desc field", addTaskForm);
    }
  };

  const onSubmit = (values: any) => {
    if (isEdit) {
      editTaskHandler(values.id, values.title, values.description);
    } else {
      addTaskHandler(values);
    }
  };

  return (
    <div className="add-patient d-flex align-items-center justify-content-center">
      <div className="form-container d-flexflex-column justify-content-center align-items-center">
        <Formik
          initialValues={isEdit ? currentTask : addTaskForm}
          enableReinitialize
          validationSchema={formValidationSchema()}
          onSubmit={(values, { resetForm }) => {
            // onSubmit(values);
            // addTaskHandler(values);
            if (isEdit) {
              editTaskHandler(values.id, values.title, values.description);
              resetForm({ values: "" });
            } else {
              addTaskHandler(values);
            }
            resetForm({ values: "" });
          }}
        >
          {({ handleSubmit }: FormikProps<any>) => (
            <form
              onSubmit={handleSubmit}
              className="mt-4 mt-sm-0"
              autoComplete="off"
            >
              <div className="d-flex flex-column align-self-stretch align-self-sm-end">
                <Input
                  type="text"
                  name="id"
                  placeholder={`enter task id`}
                  disabled={isEdit ? true : false}
                />
                <Input
                  type="text"
                  name="title"
                  placeholder={`enter task title`}
                  onChangeValue={onChangeInputValue}
                />
                <Input
                  type="text"
                  name="description"
                  placeholder={`enter task description`}
                />
              </div>
              <Button type="submit" name={!isEdit ? `add task` : `edit task`} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddTask;
