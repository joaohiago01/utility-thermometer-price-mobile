import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: (width - 45) / 2,
    alignSelf: 'auto',
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },

  imageContainer: {
    padding: 15,
    paddingBottom: 5,
  },

  image: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },

  infoContainer: {
    padding: 15,
    paddingTop: 5
  },

  name: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontWeight: 'bold',
    fontSize: 18
  },

  utility: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontSize: 16,
    marginTop: 5
  },

  price: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;