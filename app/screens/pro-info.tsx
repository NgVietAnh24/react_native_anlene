import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextInputUser from '../components/TextInput/textInputUser';
import { CheckBox } from 'react-native-elements';


const ProInfo: React.FC = () => {
    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);
    const [seeMore, setSeeMore] = useState(false);


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
                    <TextTitle title='Trang 4/6' />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                        <Image source={require('../assets/icon-home.png')} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.textLogo} source={require('../assets/text-logo.png')} />

                {/* <Text style={styles.headerTitle}>HOÀN THÀNH BÀI KIỂM TRA</Text> */}

                <Svg height="40" width="319" viewBox="0 0 319 84">
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
                        fontSize="66"
                        fontWeight="700"
                        x="25%"
                        y="58"
                        textAnchor="middle"
                    >
                        XIN CHÚC MỪNG !
                    </SvgText>
                </Svg>


                <Text style={styles.exerciseDescription}>
                    Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
                </Text>

                <View style={styles.groupContainer}>
                    <View style={styles.typeContainer}>
                        <Image source={require('../assets/co.png')} />
                        <Image style={styles.imagePhanTram} source={require('../assets/29%.png')} />
                        <View style={styles.grType}>
                            <Text style={styles.type}>KHỐI CƠ</Text>
                            <Text style={styles.actionType}>MẤT ĐI</Text>
                        </View>
                    </View>

                    <View style={styles.typeContainer}>
                        <Image source={require('../assets/xuong.png')} />
                        <Image style={styles.imagePhanTram} source={require('../assets/20%.png')} />
                        <View style={styles.grType}>
                            <Text style={styles.type}>MẬT ĐỘ XƯƠNG</Text>
                            <Text style={styles.actionType}>SUY GIẢM</Text>
                        </View>
                    </View>

                    <View style={styles.typeContainer}>
                        <Image source={require('../assets/co.png')} />
                        <View style={styles.grType}>
                            <Text style={styles.type}>KHỚP</Text>
                            <Text style={styles.actionType}>THOÁI HÓA</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.exerciseDescriptionInfo}>
                    Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.
                </Text>

                <Image
                    source={require('../assets/hop-sua.png')}
                    style={{ width: 282, height: 211 }}
                />

                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textNote}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                        <Text style={styles.textNote}>**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones</Text>
                    </View>
                </View>

                <Svg height="20" width="319" viewBox="0 0 319 84">
                    <Defs>
                        <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="10%" stopColor="#FFC200" stopOpacity="11" />
                            <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#FFC200" stopOpacity="0.6" />
                        </SvgLinearGradient>
                    </Defs>
                    <SvgText
                        fill="url(#gradientText)"
                        fontSize="60"
                        fontWeight="700"
                        x="12%"
                        y="58"
                        textAnchor="middle"
                    >
                        LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                    </SvgText>
                </Svg>

                {seeMore == false ? (
                    <>
                        <Text style={styles.exerciseDes}>
                            Cùng Anlene giúp bạn chăm sóc sức khoẻ
                            Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn
                            đang chờ bạn!
                        </Text>

                        <Text style={styles.xemThem} onPress={() => setSeeMore(true)}>
                            Xem thêm
                        </Text>
                    </>)
                    :


                    (
                        <>
                            <Text style={styles.exerciseDes}>
                                Cùng Anlene giúp bạn chăm sóc sức khoẻ
                                Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn
                                đang chờ bạn!
                            </Text>
                            <Text style={styles.infoSeeMore}>
                                *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                            </Text>
                        </>
                    )
                }


                <BtnSubmit title='MUA NGAY' width={160} height={44} radius={24} color='#B70002' border='#FFC200' onPress={() => navigation.navigate('BuyNow')} />

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
        fontSize: 13,
        lineHeight: 17.49,
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
    exerciseDescriptionInfo: {
        width: '80%',
        fontSize: 12,
        lineHeight: 20.18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
        shadowColor: '#000', // Màu sắc của bóng đổ
        shadowOffset: { width: 0, height: 4 }, // Độ lệch của bóng đổ
        shadowOpacity: 0.25, // Độ mờ của bóng đổ
        shadowRadius: 7, // Độ mờ của bóng đổ
        elevation: 9, // Chỉ áp dụng cho Android
    },
    startButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    btnResultContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#71A162',
        borderRadius: 10.29,
        margin: 10,
    },
    textResult: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
        top: 5,
    },
    textNote: {
        fontSize: 6.11,
        fontWeight: '400',
        lineHeight: 16,
        width: 310,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: 5,
        marginTop: '14%',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        bottom: '7%',
        left: '5%',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCheckBox: {
        color: '#FFF',
        lineHeight: 16,
        fontSize: 11,
        fontWeight: '500',
        width: 314,
    },
    imagePhanTram: {
        position: 'absolute',
        right: 20,
        bottom: 50,
    },
    grType: {
        borderColor: '#FFF',
        borderWidth: 1.5,
        borderRadius: 8,
        height: 42,
        width: 110,
    },
    type: {
        color: '#FFF',
        fontSize: 12,
        lineHeight: 16.68,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    actionType: {
        color: '#ECD24A',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 16.68,
    },
    typeContainer: {
        alignItems: 'center',
        padding: 5
    },
    groupContainer: {
        flexDirection: 'row'
    },
    exerciseDes: {
        color: '#FFF',
        fontSize: 12,
        width: 340,
        lineHeight: 16.14,
        fontWeight: '500',
        textAlign: 'center'
    },
    xemThem: {
        fontSize: 12,
        lineHeight: 16.14,
        color: '#ECD24A',
        fontWeight: '500',
        marginBottom: 10,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        paddingBottom: 10,
    },
    infoSeeMore: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 14.3,
        fontStyle: 'italic',
        color: '#FFF',
        paddingTop: 3,
        width: 340,
        textAlign: 'center',
        paddingBottom: 10,
    },
});

export default ProInfo;