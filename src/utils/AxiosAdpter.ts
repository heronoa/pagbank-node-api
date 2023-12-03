import axios from "axios";

import HttpClient from "../@types/httpClient";

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async post(url: string, data: any, options = {}): Promise<any> {
    const response = await axios.post(url, data, options);
    return response.data;
  }
}
