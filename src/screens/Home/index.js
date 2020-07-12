import React from 'react';
import { View, ScrollView } from 'react-native';

import { Text, FAB } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import ProductList from '../../components/ProductList';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToManagerProduct() {
    navigation.navigate(' ');
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Adicione produtos a sua lista e baseado no seu preço descubra o nível de utilidade deles!</Text>
        </View>
        <ScrollView>
          <ProductList />
        </ScrollView>
        <FAB style={styles.buttonIcon} onPress={handleNavigateToManagerProduct} icon='plus' color='#FF0000' />
      </View>
    </>
  );
}

export default Home;