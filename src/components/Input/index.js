import React, {
    useEffect,
    useRef,
} from 'react';

import { TextInput } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, placeholder, type, styles }) {
    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue } = useField(name, placeholder, type, styles);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <TextInput
            style={styles}
            ref={inputRef}
            keyboardAppearance="dark"
            defaultValue={defaultValue}
            placeholderTextColor="#666360"
            placeholder={placeholder}
            keyboardType={type}
            onChangeText={value => {
                if (inputRef.current) {
                    inputRef.current.value = value;
                }
            }}
        />
    );
};

export default Input;