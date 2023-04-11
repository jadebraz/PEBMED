import { api } from './config';

export class OfferServices{
    async getOffers(data) {
        return api.get('/offer', data)
    }
}