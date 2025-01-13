import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TextTitle from '../Text/textTitle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/type';

type Props = NativeStackScreenProps<RootStackParamList>;

const CustomHeader: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                <Image source={require('../assets/icon-back.png')} />
            </TouchableOpacity>
            <TextTitle title='Trang 2/6' />
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                <Image source={require('../assets/icon-home.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        top: '5%',
        position: 'absolute',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // marginBottom: 18,
        paddingHorizontal: 20,
    },
});

export default CustomHeader;