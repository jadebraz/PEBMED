export class SubscriptionServices{
    async createSubscription(data) {
        return api.post('/subscription', data);
    }
} 