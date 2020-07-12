import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF0000',
        width: '70%',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 15
    },
    textButton: {
        fontFamily: 'Roboto_300Light',
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10
    },
    image: {
        margin: 15,
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    dropzone: {
        margin: 15,
        width: 300,
        height: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#C4C4C4'
    },
    dropzoneText: {
        fontFamily: 'Roboto_300Light',
        fontSize: 16,
        alignSelf: 'center',
        color: '#C4C4C4'
    },
    input: {
        fontFamily: 'Roboto_300Light',
        fontSize: 16,
        margin: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10
    },
});

export default styles;