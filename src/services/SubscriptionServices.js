import { api } from './config';

export class SubscriptionServices{
    async createSubscription(data) {
        return api.post('/subscription', data);
    }
}