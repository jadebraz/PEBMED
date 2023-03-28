export class OfferServices{
    async getOffer(data) {
        return api.get('/offer', data)
    }
}