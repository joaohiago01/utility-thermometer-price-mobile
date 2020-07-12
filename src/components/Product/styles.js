import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: (width - 45) / 2,
    alignSelf: 'auto',
  },

  icon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    justifyContent: 'flex-start'
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
    paddingTop: 5,
    marginBottom: 15,
    justifyContent: 'flex-start'
  },

  name: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontWeight: 'bold',
    fontSize: 16
  },

  utility: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5
  },

  price: {
    textAlign: 'left',
    color: '#000',
    fontFamily: 'Roboto_300Light',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;