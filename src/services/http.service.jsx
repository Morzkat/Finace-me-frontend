import axios from 'axios';

export class HttpService {
  axios = axios.create({
    baseURL: 'http://localhost:4000/api/'
  })

  constructor() {
    this.setup();
  }


  setup() {
    //TODO: setup backend api url and headers.
  }

  async get(endpoint) {
    try {
      const { data } = await this.axios.get(endpoint);
      console.info('response: ', data);
      return data;
    } catch (error) {
      // Create a error handler and logger.
      console.log('error: ', error)
    }
  }
  
  async getById(endpoint, id) {
    const { data } = await this.axios.get(endpoint, { params: { id: id } });
    return data;
  }
  
  async post(endpoint, body) {
    try {
      const { data } = await this.axios.post(endpoint, body);
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }
  
  async put(endpoint, id, body) {
    try {
      const { data } = await this.axios.post(`${endpoint}/${id}`, body);
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async delete(endpoint, id) {
    const { data } = await this.axios.delete(endpoint, { params: { id: id } });
    return data;
  }

}

const httpService = new HttpService();

export default httpService;