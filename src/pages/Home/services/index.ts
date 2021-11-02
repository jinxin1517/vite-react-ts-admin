import { ResultType } from '@/types/global';
import request from '@/utils/request';

export const findAllUser = async (): Promise<ResultType<any>> => {
  return request('/api/users', {
    method: 'GET',
  });
};

export const findUvMaps = async (): Promise<ResultType<any>> => {
  return request('/api/uv/maps', {
    method: 'GET',
  });
};
