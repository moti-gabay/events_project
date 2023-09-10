import axios, { AxiosResponse, AxiosError } from 'axios';
import {GUEST_INFO_ROUTE, TOKEN_KEY} from "./url"
interface ApiResponse<T> {
  data: T;
  // Add other properties you expect in the response here
}

export const apiRequest = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  bodyData?: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios({
      url,
      method,
      data: bodyData ? JSON.stringify(bodyData) : undefined,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': localStorage[TOKEN_KEY],

      },
    });
    return response.data;
} catch (error) {
    if (error instanceof AxiosError) throw AxiosError;
    else throw error;
}
};

export const guestInfoRequest = async() => {
  try {
    if(localStorage[TOKEN_KEY]){
      const {data} = await axios.get(GUEST_INFO_ROUTE)
      return data;
    }
  } catch (error) {
    console.log(error);
    
  }
}