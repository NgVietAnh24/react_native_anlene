import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import TextTitle from '../Text/textTitle';

interface textInputUserProps {
    title: string;
    value: string;
    keyBoardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad' | 'visible-password';
    placeholder?: string;
    onChangeText: (text: string) => void;


}

const TextInputUser: React.FC<textInputUserProps> = ({ title, value, keyBoardType = 'default', placeholder, onChangeText }) => {
    return (
        <View style={{ top: 22 }}>
            <Text style={styles.textTitle}>{title}</Text>
            <TextInput
                style={styles.textInput}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyBoardType}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        // top: 22,
        fontSize: 14,
        lineHeight: 18.83,
        fontWeight: '500',
        color: '#FFF',
        // bottom: 40,
    },
    textInput: {
        height: 40,
        width: 327,
        borderRadius: 8,
        backgroundColor: '#FFF',
        // marginBottom: 10,
    },
})

export default TextInputUser;
