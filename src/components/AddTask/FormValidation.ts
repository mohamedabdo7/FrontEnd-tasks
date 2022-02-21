import * as Yup from "yup";

const addTaskFormValidationSchema = () => {
  return Yup.object().shape({
    id: Yup.string().required("id required"),
    title: Yup.string().required("title required"),
    description: Yup.string().required("description required"),
  });
};

export default addTaskFormValidationSchema;
