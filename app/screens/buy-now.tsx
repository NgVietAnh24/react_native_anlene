import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, DevSettings, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextTitle from '../components/Text/textTitle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList>;

const BuyNow: React.FC<Props> = ({ navigation }) => {
    const { imageUrls, loading, error } = useSelector((state: RootState) => state.images);

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
        <>
            <View style={isWeb ? stylesWeb.container : isTablet ? stylesTablet.container : styles.container}>

                {isMobile ?
                    <Image
                        source={require('../assets/anlene-coffee.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    />
                    :
                    <Image
                        source={imageUrls ? { uri: imageUrls[11] } : undefined}
                        style={isWeb ? stylesWeb.backgroundImage : isTablet ? stylesTablet.backgroundImage : styles.backgroundImage}
                        resizeMode="cover"
                    />}

                {isWeb || isTablet &&
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
                    />
                }
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icon-back.png')} />
                    </TouchableOpacity>
                    <TextTitle title='Trang 5/6' />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => reloadApp()}>
                        <Image source={require('../assets/icon-home.png')} />
                    </TouchableOpacity>
                </View>

                <Image style={isWeb ? stylesWeb.textLogo : isTablet ? stylesTablet.textLogo : styles.textLogo} source={require('../assets/text-logo.png')} />

                <Svg height="70" width={isMobile ? "319" : "619"} viewBox="0 0 319 84">
                    <Defs>
                        <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="0%" stopColor="#BA872C" stopOpacity="0.6" />
                            <Stop offset="10%" stopColor="#E8E276" stopOpacity="11" />
                            <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#885021" stopOpacity="0.6" />
                        </SvgLinearGradient>
                    </Defs>
                    {isMobile ?
                        <>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="26"
                                fontWeight="700"
                                x="42%"
                                y="28"
                                textAnchor="middle"
                            >
                                CHĂM SÓC CƠ-XƯƠNG-KHỚP
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="21"
                                fontWeight="700"
                                x="42%"
                                y="55"
                                textAnchor="middle"
                            >
                                NHẬN LỘC SỨC KHỎE TỪ ANLENE
                            </SvgText>
                        </>
                        :
                        <>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="38"
                                fontWeight="700"
                                x="14%"
                                y="35"
                                textAnchor="middle"
                            >
                                CHĂM SÓC CƠ-XƯƠNG-KHỚP
                            </SvgText>
                            <SvgText
                                fill="url(#gradientText)"
                                fontSize="30"
                                fontWeight="700"
                                x="10%"
                                y="70"
                                textAnchor="middle"
                            >
                                NHẬN LỘC SỨC KHỎE TỪ ANLENE
                            </SvgText>
                        </>
                    }
                </Svg>
                <Text style={isMobile ? styles.textHead : stylesTablet.textHead}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
                <Text style={isMobile ? styles.textOfHead : stylesTablet.textOfHead}> Hạn sử dụng: <Text style={isTablet && { color: '#ECD24A' }}>25/07/2021 - 31/07/2021 </Text></Text>

                <View style={[isTablet && { left: '4%', }, { top: isMobile ? '38%' : '5%', alignItems: isMobile ? 'center' : 'flex-start' }]}>
                    {isMobile ?
                        <Image style={{ bottom: '6%' }} source={require('../assets/voucher.png')} />
                        :
                        <Image style={{ marginBottom: '4%' }} source={require('../assets/voucher-big.png')} />
                    }
                    <BtnSubmit title='MUA NGAY' onPress={() => Linking.openURL('https://shopee.vn/product/135890280/13434056166?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkUm9yWVZMbGw0Q214S0d1TzNEZmUwNWNWWkQzWU40cHlzbFRkdzZMMExjQ0U4UnBaWEpCdkVKN1pZMmJHbGNZaFcvSGhRRko5Rkd4WHNKejg2dHhmYWFOUUdHdU83UVBXajJoQ2grSkMvdEg&is_seller=true&utm_campaign=s135890280_ss_vn_gshp_ggshopping&utm_source=google&utm_medium=seller&utm_content=anlene&gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHuikILnGLcpQTON2RCFj_DutfUAbTPxpaLjssOvEvn6IRKBVsi57k0aAqwoEALw_wcB')} width={isMobile ? 184 : 216} height={isMobile ? 46 : 52} radius={30.24} color='#B70002' />
                    <BtnSubmit title='Tìm hiểu ngay' onPress={() => navigation.navigate('ProDetail')} width={isMobile ? 184 : 220} height={isMobile ? 34 : 44} radius={30.24} color='#FFF' border='#73A442' textColor='#73A442' />


                    <Text style={isMobile ? styles.textHead1 : stylesTablet.textHead1}>* Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada</Text>
                    <Text style={isMobile ? styles.textHead1 : stylesTablet.textHead1}>* Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ</Text>

                </View>

                <StatusBar style="auto" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    backgroundImage: {
        position: 'absolute',
        top: '19%',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '60%',
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
    box1: {
        width: '100%',
        height: 272,
        position: 'absolute',
        top: '0%',
    },
    box2: {
        width: '100%',
        height: 240,
        position: 'absolute',
        bottom: '0%',
    },
    textHead: {
        height: 'auto',
        fontSize: 12,
        width: 320,
        fontWeight: '700',
        lineHeight: 16,
        textAlign: 'center',
        color: '#fff',
    },
    textHead1: {
        height: 'auto',
        fontSize: 9,
        width: 320,
        fontWeight: '400',
        lineHeight: 11.7,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#fff',
    },
    textHead2: {
        height: 'auto',
        fontSize: 9,
        width: 320,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#fff',
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: 5,
        marginTop: '14%',
    },
    textOfHead: {
        fontSize: 16,
        lineHeight: 23.29,
        textAlign: 'center',
        color: '#ECD24A',
        fontWeight: 'bold',
    },
});

const stylesTablet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
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
    box1: {
        width: '54%',
        height: '100%',
        position: 'absolute',
        left: 0,
    },
    box2: {
        width: '100%',
        height: 240,
        position: 'absolute',
        bottom: '0%',
    }, logoImage: {
        width: 100, height: 70
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

    textHead: {
        height: 'auto',
        fontWeight: '700',
        fontSize: 16,
        width: 430,
        lineHeight: 21.92,
        textAlign: 'left',
        color: '#fff',
        marginTop: '5%',
        left: '4%'
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
        lineHeight: 24,
        left: '3.5%',
        color: '#FFF',
        fontWeight: '500',
    },
    grLogo: {
        right: '1%',
        flexDirection: 'row',
    },

    textHead1: {
        height: 'auto',
        fontSize: 14,
        width: 440,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'italic',
        color: '#fff',
    },
    textHead2: {
        height: 'auto',
        fontSize: 9,
        width: 320,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#fff',
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: '5%',
        marginTop: '3%',
        left: '44.5%',
    },

});

const stylesWeb = StyleSheet.create({
    logoImage: {
        width: 100, height: 70
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: 5,
        marginTop: '14%',
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
        width: '54%',
        height: '100%',
        position: 'absolute',
        left: 0,
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
    textFoot: {
        top: 10,
        height: 'auto',
        fontSize: 12,
        width: 320,
        lineHeight: 16.14,
        textAlign: 'center',
        color: '#fff',
    },
    textFoot1: {
        top: 10,
        height: 'auto',
        fontWeight: '400',
        fontSize: 13,
        width: 464,
        lineHeight: 18,
        textAlign: 'left',
        color: '#fff',
        marginTop: '1%',
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

export default BuyNow;
