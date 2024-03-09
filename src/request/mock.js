import request from "./index"
import MockAdapter from 'axios-mock-adapter'; 

export const mock = new MockAdapter(request)