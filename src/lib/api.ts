import axios, { AxiosResponse } from 'axios';
import type { Bill } from './types/bills';

export const apiRoot = 'http://localhost:3001';
// type Bills = Bill[];
export interface BillsGetResponse {
	bills: Bill[];
	username: string;
}

// export function getBills(userId: string): Promise<AxiosResponse<Bill>> {
export function getBills(userId: string): Promise<AxiosResponse<BillsGetResponse>> {
	return axios.get(`${apiRoot}/api/user/${userId}/bills`);
}
