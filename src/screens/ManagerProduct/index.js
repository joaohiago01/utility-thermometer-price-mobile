import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { useNavigation, useRoute } from '@react-navigation/native';

import Input from '../../components/Input';

import styles from './styles';

import api from '../../services/api';
const ManagerProduct = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params;

  const [product, setProduct] = useState({});
  const [imageFile, setImageFile] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      if (imageFile.length < 1) {
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
      console.log(data);
      const newProduct = new FormData();

      newProduct.append('name', data.name);
      newProduct.append('price', data.price);
      newProduct.append('image', imageFile);

      console.log(newProduct);
      api.post('products', data).then(response => {
        if (response.data.message === 'Produto já existe') {
          Alert.alert('Oops...', 'Este produto já está na lista');
        } else {
          navigation.navigate('Home');
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

    if (routeParams.product != null) {
      setProduct(routeParams.product);
    }

  }, []);

  useEffect(() => {
    setImagePreview(imagePreview);
  }, [imagePreview]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, marginTop: 15 }} behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {imagePreview.length > 0 ? <Image source={{ uri: imagePreview }} style={styles.image} /> : (<View style={styles.dropzone}><Text style={styles.dropzoneText}>Selecione uma imagem</Text></View>)}
        <TouchableOpacity style={styles.button} onPress={async () => {
          try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.cancelled) {
              let image_uri = result.uri;
              let image_file = image_uri.split('/')[11];
              setImageFile(image_uri);
              setImagePreview(result.uri);
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