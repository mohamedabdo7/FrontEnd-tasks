const initialState: any = {
  tasks: [],
  currentTask: {},
};

const allTasks = (state = initialState, action: any) => {
  switch (action.type) {
    case "ALL-TASKS":
      //   console.log(action);
      return {
        ...state,
        tasks: action.payload,
      };

    case "ADD-TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE-TASK":
      console.log(action.payload);
      return {
        ...state,
        tasks: [...action.payload],
      };

    case "EDIT-TASK":
      console.log(action.payload);
      return {
        ...state,
        currentTask: action.payload,
      };

    case "CONFIRM-EDIT":
      console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};

export default allTasks;
