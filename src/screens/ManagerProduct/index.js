import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import styles from './styles';

import api from '../../services/api';
const ManagerProduct = () => {

  const navigation = useNavigation();

  const [image, setImage] = useState('');

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      if (image.length < 1) {
        Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos corretamente.');
        return;
      }

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const newProduct = new FormData();

      newProduct.append('name', data.name);
      newProduct.append('price', data.price);
      newProduct.append('image', image);

      api.post('products', newProduct).then(response => {

        if (response.data.message === 'Produto já existe') {
          Alert.alert('Oops...', 'Este produto já está na lista');
        } else {
          navigation.navigate('Medidor de Utilidade');
        }

      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos corretamente.');
      }
    }
  }

  useEffect(() => {
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Desculpe, você precisa permitir o uso da camêra!');
        }
      }
    }

  }, []);

  useEffect(() => {
    setImage(image);
  }, [image]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, marginTop: 15 }} behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {image.length > 0 ? <Image source={{ uri: `data:image/gif;base64,${image}` }} style={styles.image} /> : (<View style={styles.dropzone}><Text style={styles.dropzoneText}>Selecione uma imagem</Text></View>)}
        <TouchableOpacity style={styles.button} onPress={async () => {
          try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
              base64: true
            });
            if (!result.cancelled) {
              setImage(result.base64);
            }

          } catch (err) {
            console.log(err);
          }
        }}>
          <Text style={styles.textButton}>Selecione a imagem do produto</Text>
        </TouchableOpacity>

        <Input name="name" type='default' placeholder='Digite o nome do produto (Ex: Air Jordan 1)' styles={styles.input} />
        <Input name="price" type='decimal-pad' placeholder='Digite o preço do produto (Ex: 155.50)' styles={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => formRef.current.submitForm()}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </Form>

    </KeyboardAvoidingView>
  );
}

export default ManagerProduct;