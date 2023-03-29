import { getUtil } from './../../utils/service';

export const getProductsRequest = async () => {
    try {
        const url = 'products';
        const response = await getUtil(url);
        if (response.data) {
            return response.data;
        }
        else {
            return {
                status: response.status,
                message: 'Failed'
            };
        }
    }
    catch (error) {
        return {status:400,message: error.error}
    }
}
