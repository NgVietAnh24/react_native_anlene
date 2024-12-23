import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextTitle from '../components/Text/textTitle';
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../assets/background.png')}
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
                <View style={styles.grTitleLogo}>
                    <TextTitle title='Trang 1/6' paddingLeft={60} />
                    <Image
                        source={require('../assets/text-logo.png')}
                        style={{ justifyContent: 'flex-end' }}
                    />
                </View>
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
                <Text style={styles.textHead}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?</Text>
                <Text style={styles.textHead}>Ngay lúc này, hãy <Text style={styles.textOfHead}> Kiểm tra Sức khoẻ Cơ-Xương-Khớp  </Text> cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,
                    trọn vẹn niềm vui.</Text>

                <View style={{ top: '45%', alignItems: 'center' }}>
                    <BtnSubmit title='KIỂM TRA NGAY' onPress={() => navigation.navigate('Check')} width={230} height={46} radius={30.24} border='#FFC200' color='#B70002' />

                    <View style={styles.grLogo}>
                        <Image source={require('../assets/free-logo.png')} />
                        <Image source={require('../assets/minute-logo.png')} />
                        <Image source={require('../assets/voucher-logo.png')} />
                    </View>

                    <Text style={styles.textHead}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>
                    <Text style={styles.textHead}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường</Text>

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
        top: 12,
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

export default Welcome;
