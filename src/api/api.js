import axios from 'axios'

export async function productsData() {
    const produts = await axios.get('https://fakestoreapiserver.reactbd.com/nextamazon');
    return produts
}
// https://fakestoreapiserver.reactbd.com/amazonproducts
