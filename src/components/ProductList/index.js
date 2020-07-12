import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Product from '../Product';

import styles from './styles';

import api from '../../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data);
        });
    }, [products]);

    return (
        <View style={styles.container}>
            {products.map(product => <Product key={product.id} product={product} />)}
        </View>
    );
}

export default ProductList;