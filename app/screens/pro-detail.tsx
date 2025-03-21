import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, DevSettings, useWindowDimensions } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';

type Props = NativeStackScreenProps<RootStackParamList>;

const ProDetail: React.FC<Props> = ({ navigation }) => {

    const { width, height } = useWindowDimensions();

    const isTablet = width >= 768 && width <= 1024;
    const isWeb = width > 1024;
    const isMobile = width < 768;

    const reloadApp = () => {
        if (__DEV__) {
            DevSettings.reload();
        }
    };


    return (
        <ScrollView >
            <LinearGradient
                style={styles.container}
                colors={['rgba(14, 71, 14, 1)', 'rgb(68, 153, 45)', 'rgb(80, 164, 47)', 'rgba(19, 80, 14, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >

                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icon-back.png')} />
                    </TouchableOpacity>
                    <TextTitle title='Trang 6/6' />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => reloadApp()}>
                        <Image source={require('../assets/icon-home.png')} />
                    </TouchableOpacity>
                </View>

                <Image style={isMobile ? styles.textLogo : stylesTablet.textLogo} source={require('../assets/text-logo.png')} />

                <Svg height="60" width="319" viewBox="0 0 319 84">
                    <Defs>
                        {isMobile ?
                            <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="0%" stopColor="#ECD24A" stopOpacity="0.6" />
                                <Stop offset="10%" stopColor="#ECD24A" stopOpacity="11" />
                                <Stop offset="95%" stopColor="#ECD24A" stopOpacity="1" />
                            </SvgLinearGradient>
                            :
                            <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="0%" stopColor="#ECD24A" stopOpacity="1" />
                                <Stop offset="100%" stopColor="#ECD24A" stopOpacity="1" />
                            </SvgLinearGradient>
                        }
                    </Defs>
                    <SvgText
                        fill="url(#gradientText)"
                        fontSize="36"
                        fontWeight="700"
                        x="35%"
                        y="35"
                        textAnchor="middle"
                    >
                        THÔNG TIN SẢN PHẨM
                    </SvgText>
                    <SvgText
                        fill="url(#gradientText)"
                        fontSize="28"
                        fontWeight="700"
                        x="35%"
                        y="68"
                        textAnchor="middle"
                    >
                        SỮA ANLENE 3 KHỎE
                    </SvgText>
                </Svg>
                {isMobile ?
                    <Image source={require('../assets/logo-vitamin.png')} />
                    :
                    <Image source={require('../assets/logo-vitamin-big.png')} />
                }

                <Text style={isMobile ? styles.exerciseDescription : stylesTablet.exerciseDescription}>
                    Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động, chẳng ngại
                    “rào cản” tuổi tác.
                </Text>
                <View style={isTablet && { flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/image1-big.png')}
                        style={isMobile ? { margin: '5%' } : stylesTablet.img}
                    />
                    <Image
                        source={require('../assets/image2-big.png')}
                        style={isMobile ? { margin: '5%' } : stylesTablet.img}
                    />
                    <Image
                        source={require('../assets/image3-big.png')}
                        style={isMobile ? { margin: '5%' } : stylesTablet.img}
                    />

                </View>

            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: '3%',
        paddingHorizontal: 20,
    },
    homeButtonText: {
        fontSize: 24,
    },
    progressContainer: {
        width: 327,
        height: 82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    progressItem: {
        top: 5,
        alignItems: 'center',
        flex: 1,
    },
    progressLabel: {
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
        color: '#FFF',
        marginTop: 5,
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: 5,
        marginTop: '10%',
    },
    progressLine: {
        width: '60%',
        borderColor: '#FFF',
        borderStyle: 'dashed',
        borderWidth: 1.1,
        position: 'absolute',
        top: '20%',
        left: '70%',
    },
    progressCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#FFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressCircleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    exerciseContainer: {
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: '94%',
        flexDirection: 'row'
    },
    exerciseImage: {
        width: 327,
        height: 317,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: '70%',
    },
    exerciseIcon: {
        position: 'absolute',
        right: '-3%',
        top: '-5%',
    },
    exerciseDescription: {
        width: '82%',
        fontSize: 14,
        lineHeight: 18.83,
        top: 5,
        bottom: 5,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
        shadowColor: '#000', // Màu sắc của bóng đổ
        shadowOffset: { width: 0, height: 4 }, // Độ lệch của bóng đổ
        shadowOpacity: 0.25, // Độ mờ của bóng đổ
        shadowRadius: 7, // Độ mờ của bóng đổ
        elevation: 9, // Chỉ áp dụng cho Android
    },


});

const stylesTablet = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: '3%',
        paddingHorizontal: 20,
    },
    homeButtonText: {
        fontSize: 24,
    },
    progressContainer: {
        width: 327,
        height: 82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    progressItem: {
        top: 5,
        alignItems: 'center',
        flex: 1,
    },
    progressLabel: {
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
        color: '#FFF',
        marginTop: 5,
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: 5,
        marginTop: '5%',
    },
    img: {
        margin: '2%'
    },
    progressLine: {
        width: '60%',
        borderColor: '#FFF',
        borderStyle: 'dashed',
        borderWidth: 1.1,
        position: 'absolute',
        top: '20%',
        left: '70%',
    },
    progressCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#FFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressCircleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    exerciseContainer: {
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: '94%',
        flexDirection: 'row'
    },
    exerciseImage: {
        width: 327,
        height: 317,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: '70%',
    },
    exerciseIcon: {
        position: 'absolute',
        right: '-3%',
        top: '-5%',
    },
    exerciseDescription: {
        width: 561,
        fontSize: 14,
        lineHeight: 18.83,
        marginTop: '1%',
        bottom: 5,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },


});

export default ProDetail;