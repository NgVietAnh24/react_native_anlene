import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextTitle from '../components/Text/textTitle';
import { useNavigation } from '@react-navigation/native';

const BuyNow: React.FC = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../assets/anlene-coffee.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />

                <LinearGradient
                    colors={['rgba(14, 71, 14, 1)', 'rgba(31, 102, 13, 1)', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.9)', 'rgba(39, 117, 13, 0.9)', 'rgba(46, 130, 13, 0)']}
                    style={styles.box1}
                />
                <LinearGradient
                    colors={['rgba(46, 130, 13, 0)', 'rgba(39, 117, 13, 0.9)', 'rgba(39, 117, 13, 0.9)', 'rgba(35, 110, 13, 0.9)', 'rgba(32, 104, 13, 0.9)', 'rgba(31, 102, 13, 1)', 'rgba(14, 71, 14, 1)']}
                    style={styles.box2}
                />

                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icon-back.png')} />
                    </TouchableOpacity>
                    <TextTitle title='Trang 5/6' />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                        <Image source={require('../assets/icon-home.png')} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.textLogo} source={require('../assets/text-logo.png')} />

                <Svg height="70" width="319" viewBox="0 0 319 84">
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

                </Svg>
                <Text style={styles.textHead}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
                <Text style={styles.textOfHead}> Hạn sử dụng: 25/07/2021 - 31/07/2021 </Text>

                <View style={{ top: '38%', alignItems: 'center' }}>
                    <Image style={{ bottom: '6%' }} source={require('../assets/voucher.png')} />
                    <BtnSubmit title='MUA NGAY' onPress={() => Linking.openURL('https://shopee.vn/product/135890280/13434056166?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkUm9yWVZMbGw0Q214S0d1TzNEZmUwNWNWWkQzWU40cHlzbFRkdzZMMExjQ0U4UnBaWEpCdkVKN1pZMmJHbGNZaFcvSGhRRko5Rkd4WHNKejg2dHhmYWFOUUdHdU83UVBXajJoQ2grSkMvdEg&is_seller=true&utm_campaign=s135890280_ss_vn_gshp_ggshopping&utm_source=google&utm_medium=seller&utm_content=anlene&gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHuikILnGLcpQTON2RCFj_DutfUAbTPxpaLjssOvEvn6IRKBVsi57k0aAqwoEALw_wcB')} width={184} height={46} radius={30.24} color='#B70002' />
                    <BtnSubmit title='Tìm hiểu ngay' onPress={() => navigation.navigate('ProDetail')} width={184} height={34} radius={30.24} color='#FFF' border='#73A442' textColor='#73A442' />


                    <Text style={styles.textHead1}>* Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada</Text>
                    <Text style={styles.textHead2}>* Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ</Text>

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
    // grTitleLogo: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     width: '90%',
    //     marginTop: 20,
    // },
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
        fontSize: 12,
        lineHeight: 16,
        // textAlign: 'left',
        right: '12%',
        color: '#FFF',
        fontWeight: '500',
    },
    // grLogo: {
    //     flexDirection: 'row',
    // },
});

export default BuyNow;
