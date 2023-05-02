import { getUtil } from './../../utils/service';

export const getProductsRequest = async () => {
    try {
        const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=12';
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

export const getProductsListRequest = async(page) =>{
    try{
        const url = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=12`;
        const response = await getUtil(url);
        if(response.data){
            return response.data;
        }
        else{
            return {
                status : response.status,
                message : 'Faild'
            }
        }
    }
    catch(err){
        return {status:400,message: err.error}
    }
}
