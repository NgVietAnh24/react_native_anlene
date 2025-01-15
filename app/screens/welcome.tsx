import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextTitle from '../components/Text/textTitle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImageUrls } from '../slices/imageSlice';
import { AppDispatch, RootState } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList>;

const Welcome: React.FC<Props> = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    const isTablet = width >= 768 && width <= 1024;
    const isWeb = width > 1024;
    const isMobile = width < 768;

    const dispatch = useDispatch<AppDispatch>();
    const { imageUrls, loading, error } = useSelector((state: RootState) => state.images);

    useEffect(() => {
        dispatch(fetchImageUrls([
            'images/background.png',
            'images/free-logo.png',
            'images/minute-logo.png',
            'images/voucher-logo.png',
            'images/bai1.png',
            'images/bai2.png',
            'images/bai3.png',
            'images/bai4.png',
            'images/hop-sua.png',
            'images/logo-vitamin-green.png',
            'images/background-tablet.png',
            'images/Anlene-b.png',
            'images/bg.png',
        ]));
    }, [dispatch]);

    return (
        <>
            <View style={isWeb ? stylesWeb.container : isTablet ? stylesTablet.container : styles.container}>
                {isMobile ?
                    <Image
                        source={imageUrls ? { uri: imageUrls[0] } : undefined}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    />
                    :
                    isTablet ?
                        <Image
                            source={imageUrls ? { uri: imageUrls[10] } : undefined}
                            style={isWeb ? stylesWeb.backgroundImage : isTablet ? stylesTablet.backgroundImage : styles.backgroundImage}
                            resizeMode="cover"
                        />
                        :
                        <Image
                            source={imageUrls ? { uri: imageUrls[12] } : undefined}
                            style={isWeb ? stylesWeb.backgroundImage : isTablet ? stylesTablet.backgroundImage : styles.backgroundImage}
                            resizeMode="cover"
                        />
                }
                {isWeb &&
                    <LinearGradient
                        colors={['rgba(14, 71, 14, 1)', 'rgba(31, 102, 13, 1)', 'rgba(32, 104, 13, 1)', 'rgba(35, 110, 13, 1)', 'rgba(39, 117, 13, 0.8)', 'rgba(46, 130, 13, 0)']}
                        style={isWeb ? stylesWeb.box1 : stylesTablet.box1}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />}
                {isTablet &&
                    <LinearGradient
                        colors={['rgba(14, 71, 14, 1)', 'rgba(31, 102, 13, 1)', 'rgba(32, 104, 13, 1)', 'rgba(35, 110, 13, 1)', 'rgba(39, 117, 13, 0.8)', 'rgba(46, 130, 13, 0)']}
                        style={isWeb ? stylesWeb.box1 : stylesTablet.box1}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />}
                {isMobile &&
                    <LinearGradient
                        colors={['rgba(14, 71, 14, 1)', 'rgba(31, 102, 13, 1)', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.9)', 'rgba(39, 117, 13, 0.9)', 'rgba(46, 130, 13, 0)']}
                        style={isWeb ? stylesWeb.box1 : isTablet ? stylesTablet.box1 : styles.box1}
                    />}
                {isMobile &&
                    <LinearGradient
                        colors={['rgba(46, 130, 13, 0)', 'rgba(39, 117, 13, 0.9)', 'rgba(39, 117, 13, 0.9)', 'rgba(35, 110, 13, 0.9)', 'rgba(32, 104, 13, 0.9)', 'rgba(31, 102, 13, 1)', 'rgba(14, 71, 14, 1)']}
                        style={styles.box2}
                    />}

                <View style={isWeb ? stylesWeb.grTitleLogo : isTablet ? stylesTablet.grTitleLogo : styles.grTitleLogo}>
                    <TextTitle color='green' title='Trang 1/6' paddingLeft={60} />
                    <Image
                        source={require('../assets/text-logo.png')}
                        style={isMobile ? { justifyContent: 'flex-end', width: 60, height: 16 } : { justifyContent: 'flex-end', width: 104, height: 28 }}
                    />
                </View>
                {isMobile ?
                    <Svg height="100" width="319" viewBox="0 0 319 84">
                        <Defs>
                            <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="0%" stopColor="#BA872C" stopOpacity="0.6" />
                                <Stop offset="10%" stopColor="#E8E276" stopOpacity="11" />
                                <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                                <Stop offset="100%" stopColor="#885021" stopOpacity="0.6" />
                            </SvgLinearGradient>
                        </Defs>
                        <SvgText
                            fill="url(#gradientText)"
                            fontSize="22"
                            fontWeight="700"
                            x="50%"
                            y="28"
                            textAnchor="middle"
                        >
                            TẾT BẬN RỘN
                        </SvgText>
                        <SvgText
                            fill="url(#gradientText)"
                            fontSize="22"
                            fontWeight="700"
                            x="50%"
                            y="56"
                            textAnchor="middle"
                        >
                            CƠ-XƯƠNG-KHỚP CÓ KHỎE
                        </SvgText>
                        <SvgText
                            fill="url(#gradientText)"
                            fontSize="22"
                            fontWeight="700"
                            x="50%"
                            y="84"
                            textAnchor="middle"
                        >
                            ĐỂ CHU TOÀN?
                        </SvgText>
                    </Svg>
                    :
                    isTablet ?
                        <Svg height="100" width="410" viewBox="0 0 319 84">
                            <Defs>
                                <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="#BA872C" stopOpacity="0.6" />
                                    <Stop offset="10%" stopColor="#E8E276" stopOpacity="1" />
                                    <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                                </SvgLinearGradient>
                            </Defs>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="17%"
                                y="24"
                                textAnchor="middle"
                            >
                                TẾT BẬN RỘN
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="39%"
                                y="55"
                                textAnchor="middle"
                            >
                                CƠ-XƯƠNG-KHỚP CÓ KHỎE
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="20%"
                                y="84"
                                textAnchor="middle"
                            >
                                ĐỂ CHU TOÀN ?
                            </SvgText>
                        </Svg>
                        :
                        <Svg height="100" width="910" viewBox="0 0 319 84">
                            <Defs>
                                <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="#BA872C" stopOpacity="0.6" />
                                    <Stop offset="10%" stopColor="#E8E276" stopOpacity="1" />
                                    <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                                </SvgLinearGradient>
                            </Defs>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="17%"
                                y="24"
                                textAnchor="middle"
                            >
                                TẾT BẬN RỘN
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="39%"
                                y="55"
                                textAnchor="middle"
                            >
                                CƠ-XƯƠNG-KHỚP CÓ KHỎE
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="22"
                                fontWeight="700"
                                x="20%"
                                y="84"
                                textAnchor="middle"
                            >
                                ĐỂ CHU TOÀN ?
                            </SvgText>
                        </Svg>
                }
                <Text style={isWeb ? stylesWeb.textHead : isTablet ? stylesTablet.textHead : styles.textHead}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?</Text>
                <Text style={isWeb ? stylesWeb.textHead : isTablet ? stylesTablet.textHead : styles.textHead}>Ngay lúc này, hãy <Text style={isWeb ? stylesWeb.textOfHead : isTablet ? stylesTablet.textOfHead : styles.textOfHead}>Kiểm tra Sức khoẻ Cơ-Xương-Khớp  </Text>cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,
                    trọn vẹn niềm vui.</Text>

                <View style={isMobile ? { top: '45%', alignItems: 'center' } : isTablet ? { top: '15%', alignItems: 'flex-start' } : { top: '5%', alignItems: 'flex-start' }}>
                    <BtnSubmit title='KIỂM TRA NGAY' onPress={() => navigation.navigate('Check')} width={230} height={46} radius={30.24} border='#FFC200' color='#B70002' />

                    <View style={isWeb ? stylesWeb.grLogo : isTablet ? stylesTablet.grLogo : styles.grLogo}>
                        <Image source={imageUrls ? { uri: imageUrls[1] } : undefined}
                            style={isWeb ? stylesWeb.logoImage : isTablet ? stylesTablet.logoImage : styles.logoImage}
                        />
                        <Image source={imageUrls ? { uri: imageUrls[2] } : undefined}
                            style={isWeb ? stylesWeb.logoImage : isTablet ? stylesTablet.logoImage : styles.logoImage}
                        />
                        <Image source={imageUrls ? { uri: imageUrls[3] } : undefined}
                            style={isWeb ? stylesWeb.logoImage : isTablet ? stylesTablet.logoImage : styles.logoImage}
                        />
                    </View>

                    <Text style={isWeb ? stylesWeb.textFoot : isTablet ? stylesTablet.textFoot : styles.textHead}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>
                    <Text style={isWeb ? stylesWeb.textFoot1 : isTablet ? stylesTablet.textFoot1 : styles.textHead}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường</Text>

                </View>

                <StatusBar style="auto" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    logoImage: {
        width: 100, height: 70
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '85%',
    },
    grTitleLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    box1: {
        width: '100%',
        height: 272,
        position: 'absolute',
        top: '0%',
    },
    box2: {
        width: '100%',
        height: 172,
        position: 'absolute',
        bottom: '0%',
    },
    textHead: {
        top: 10,
        height: 'auto',
        fontSize: 12,
        width: 320,
        lineHeight: 16.14,
        textAlign: 'center',
        color: '#fff',
    },
    textOfHead: {
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
        color: '#ECD24A',
        fontWeight: 'bold',
    },
    grLogo: {
        flexDirection: 'row',
    },
});

const stylesTablet = StyleSheet.create({
    logoImage: {
        width: 100, height: 70
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: '2.5%',
        justifyContent: 'flex-start',
    },
    backgroundImage: {
        position: 'absolute',
        right: 0,
        width: '110%',
        height: '100%',
    },
    grTitleLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        left: '5%',
        marginBottom: '7%',
    },
    box1: {
        width: '40%',
        height: '100%',
        position: 'absolute',
        left: 0,
    },
    textHead: {
        top: 10,
        height: 'auto',
        fontWeight: '500',
        fontSize: 16,
        width: 430,
        lineHeight: 24,
        textAlign: 'left',
        color: '#fff',
        marginTop: '1%',
    },
    textFoot: {
        top: 10,
        height: 'auto',
        fontWeight: '400',
        fontSize: 13,
        width: 464,
        fontStyle: 'italic',
        lineHeight: 18,
        textAlign: 'left',
        color: '#fff',
        marginTop: '1%',
    },
    textFoot1: {
        top: 70,
        height: 'auto',
        fontWeight: '400',
        fontSize: 12,
        width: 970,
        fontStyle: 'italic',
        lineHeight: 16,
        textAlign: 'center',
        color: '#333',
        marginTop: '1%',
    },
    textOfHead: {
        fontSize: 16,
        lineHeight: 23.29,
        textAlign: 'center',
        color: '#ECD24A',
        fontWeight: 'bold',
    },
    grLogo: {
        right: '1%',
        flexDirection: 'row',
    },
});

const stylesWeb = StyleSheet.create({
    logoImage: {
        width: 100, height: 70
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: '2.5%',
        justifyContent: 'flex-start',
    },
    backgroundImage: {
        position: 'absolute',
        right: 0,
        width: '80%',
        height: '100%',
    },
    grTitleLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        left: '5%',
        marginBottom: '7%',
    },
    box1: {
        width: '54%',
        height: '100%',
        position: 'absolute',
        left: 0,
    },
    textHead: {
        // top: 10,
        height: 'auto',
        fontWeight: '500',
        fontSize: 16,
        width: 430,
        lineHeight: 24,
        textAlign: 'left',
        color: '#fff',
        // marginTop: '1%',
    },
    textFoot: {
        // top: 10,
        height: 'auto',
        fontWeight: '400',
        fontSize: 18,
        width: 764,
        fontStyle: 'italic',
        lineHeight: 26,
        textAlign: 'left',
        color: '#fff',
        // marginTop: '1%',
    },
    textFoot1: {
        top: 5,
        height: 'auto',
        fontWeight: '400',
        fontSize: 18,
        width: 1170,
        fontStyle: 'italic',
        lineHeight: 28,
        textAlign: 'center',
        color: '#131E28',
        marginTop: '1%',
    },
    textOfHead: {
        fontSize: 16,
        lineHeight: 23.29,
        textAlign: 'center',
        color: '#ECD24A',
        fontWeight: 'bold',
    },
    grLogo: {
        right: '1%',
        flexDirection: 'row',
    },
});

export default Welcome;
