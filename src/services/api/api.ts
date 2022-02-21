import axios from "axios";

const apiUrl = "http://localhost:5000/api/tasks";

class ApiService {
  async getAllTasks(): Promise<any> {
    const response = await axios.get(apiUrl);
    return response.data;
  }

  async addTask(id: number, title: string, description: string): Promise<any> {
    const response = await axios.post(apiUrl, { id, title, description });
    return response.data;
  }

  async deleteTask(id: number): Promise<any> {
    const response = await axios.delete(`${apiUrl}/${id}`);
    // console.log(response.data);
    return response.data;
  }

  async editTask(id: number, title: string, description: string): Promise<any> {
    const response = await axios.put(`${apiUrl}`, { id, title, description });
    // console.log(response.data);
    return response.data;
  }

  async findTaskById(id: number): Promise<any> {
    const response = await axios.get(`${apiUrl}/${id}`);
    // console.log(response);
    return response.data;
  }
}

export default new ApiService();
