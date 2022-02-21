import ApiService from "../../api/api";

// let allTasks: any = [];

// const getAllTasks = async (): Promise<any> => {
//   allTasks = await ApiService.getAllTasks();

//   console.log("from get", allTasks.tasks);
// };

export const setAllTasks = () => async (dispatch: any) => {
  let allTasks;
  try {
    allTasks = await ApiService.getAllTasks();
    // console.log(allTasks);
    dispatch({
      type: "ALL-TASKS",
      payload: allTasks.tasks,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTask =
  (id: number, title: string, description: string) => async (dispatch: any) => {
    let addedTask;
    try {
      addedTask = await ApiService.addTask(id, title, description);
      //   console.log(addedTask);
      dispatch({
        type: "ADD-TASK",
        payload: addedTask.task,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const deleteTask = (id: number) => async (dispatch: any) => {
  let response;
  try {
    response = await ApiService.deleteTask(id);
    console.log(response);
    dispatch({
      type: "DELETE-TASK",
      payload: response.tasks,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editTask = (id: number) => async (dispatch: any) => {
  let response;
  try {
    response = await ApiService.findTaskById(id);
    console.log(response);
    dispatch({
      type: "EDIT-TASK",
      payload: response.task,
    });
  } catch (err) {
    console.log(err);
  }
};

export const confirmEdit =
  (id: number, title: string, description: string) => async (dispatch: any) => {
    let response;
    try {
      response = await ApiService.editTask(id, title, description);
      console.log(response);
      dispatch({
        type: "CONFIRM-EDIT",
        payload: response.tasks,
      });
    } catch (err) {
      console.log(err);
    }
  };
