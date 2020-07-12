import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import api from '../../services/api';

const Product = ({ product: { id, name, price, utility, image_url } }) => (
  <>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `data:image/gif;base64,${image_url}` }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => deleteProduct(id)}>
          <Icon name='trash-can-outline' size={24} color='#FF0000' />
        </TouchableOpacity>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {price}</Text>
        <Text style={styles.utility}>Nível de utilidade: {utility}</Text>

      </View>
    </View>
  </>
);

function deleteProduct(id) {
  api.delete(`products/${id}`);
}

export default Product;