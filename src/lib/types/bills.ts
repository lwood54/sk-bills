export interface Bill {
	balance: number;
	defaultPayment: number;
	dayDue: number;
	_id?: string;
	interest: number;
	name: string;
}
