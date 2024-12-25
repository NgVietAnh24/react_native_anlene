import React, { useState, useRef } from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';


const Check: React.FC = () => {
    const navigation = useNavigation();
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isBorderVisible, setIsBorderVisible] = useState(0);
    const [isColorVisible, setIsColorVisible] = useState('');
    const [isValue, setIsValue] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;

    const isYes = () => {
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#73A442');
        Animated.timing(translateX, {
            toValue: isValue + 342, // Di chuyển sang trái 300px
            duration: 600, // Thời gian di chuyển
            useNativeDriver: true, // Sử dụng native driver để tăng hiệu suất
        }).start();
    }

    const isNo = () => {
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#C6463A');
        Animated.timing(translateX, {
            toValue: 0, // Trở về vị trí ban đầu
            duration: 500,
            useNativeDriver: true,
        }).start();
    }



    const moveToNextScreen = () => {
        Animated.timing(translateX, {
            toValue: -300, // Di chuyển sang trái 300px
            duration: 500, // Thời gian di chuyển
            useNativeDriver: true, // Sử dụng native driver để tăng hiệu suất
        }).start();
    };

    const moveToPreviousScreen = () => {
        Animated.timing(translateX, {
            toValue: 0, // Trở về vị trí ban đầu
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    return (
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
                <TextTitle title='Trang 2/6' />
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('../assets/icon-home.png')} />
                </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>

            <View style={styles.progressContainer}>
                {[1, 2, 3, 4].map((item, index) => (
                    <View key={item} style={styles.progressItem}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressCircleText}>{item}</Text>
                        </View>
                        {index < 3 && <View style={styles.progressLine} />}
                        <Text style={styles.progressLabel}>
                            {index === 0 ? 'Cơ' : index === 1 ? 'Xương' : index === 2 ? 'Khớp' : 'Đề kháng'}
                        </Text>
                    </View>
                ))}
            </View>

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
                    fontSize="40"
                    fontWeight="700"
                    x="25%"
                    y="48"
                    textAnchor="middle"
                >
                    KIỂM TRA CƠ
                </SvgText>
            </Svg>

            <Animated.View
                style={[
                    styles.exerciseContainer,
                    { transform: [{ translateX }] },
                ]}
            >
                <Image source={require('../assets/bai1.png')} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}

                <Image source={require('../assets/bai2.png')} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}

                <Image source={require('../assets/bai3.png')} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}

                <Image source={require('../assets/bai4.png')} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}
            </Animated.View>
            <Text style={styles.exerciseDescription}>
                Thẳng lưng trước ghế, đứng lên
                ngồi xuống 5 lần từ 6-10 giây
            </Text>
            <View style={{ flexDirection: 'row', bottom: 10 }}>
                <TouchableOpacity style={styles.btnResultContainer} onPress={() => isYes()}>
                    <Image source={require('../assets/icon-yes.png')} />
                    <Text style={styles.textResult}>Được</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnResultContainer} onPress={() => moveToPreviousScreen()}>
                    <Image source={require('../assets/icon-no.png')} />
                    <Text style={styles.textResult}>Không được</Text>
                </TouchableOpacity>
            </View>
            <BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B8B8B8' onPress={() => navigation.navigate('')} />
            <Text style={styles.textNote}>*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.</Text>
        </LinearGradient>
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
        marginBottom: 18,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        color: '#FFF',
        padding: 5,
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
        width: '80%',
        fontSize: 15,
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
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 13,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
    }
});

export default Check;