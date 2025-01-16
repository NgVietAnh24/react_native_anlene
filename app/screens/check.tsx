import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, useWindowDimensions } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addResult } from '../slices/resultSlice';

type Props = NativeStackScreenProps<RootStackParamList>;

const Check: React.FC<Props> = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    const isTablet = width >= 768 && width <= 1024;
    const isWeb = width > 1024;
    const isMobile = width < 768;

    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isImageVisibleTablet, setIsImageVisibleTablet] = useState(false);
    const [isImageVisibleTablet1, setIsImageVisibleTablet1] = useState(false);
    const [isImageVisibleTablet2, setIsImageVisibleTablet2] = useState(false);
    const [isImageVisibleTablet3, setIsImageVisibleTablet3] = useState(false);
    const [isImageTrue, setIsImageTrue] = useState(require('../assets/icon-yes.png'));
    const [isImageFalse, setIsImageFalse] = useState(require('../assets/icon-no.png'));
    const [isImageTrueTablet, setIsImageTrueTablet] = useState(require('../assets/icon-yes-small.png'));
    const [isImageFalseTablet, setIsImageFalseTablet] = useState(require('../assets/icon-no-small.png'));
    const [isImageTrueTablet1, setIsImageTrueTablet1] = useState(require('../assets/icon-yes-small.png'));
    const [isImageFalseTablet1, setIsImageFalseTablet1] = useState(require('../assets/icon-no-small.png'));
    const [isImageTrueTablet2, setIsImageTrueTablet2] = useState(require('../assets/icon-yes-small.png'));
    const [isImageFalseTablet2, setIsImageFalseTablet2] = useState(require('../assets/icon-no-small.png'));
    const [isImageTrueTablet3, setIsImageTrueTablet3] = useState(require('../assets/icon-yes-small.png'));
    const [isImageFalseTablet3, setIsImageFalseTablet3] = useState(require('../assets/icon-no-small.png'));
    const [isBorderVisibleYes, setIsBorderVisibleYes] = useState(0);
    const [isBorderVisibleYesTablet, setIsBorderVisibleYesTablet] = useState(0);
    const [isBorderVisibleYesTablet1, setIsBorderVisibleYesTablet1] = useState(0);
    const [isBorderVisibleYesTablet2, setIsBorderVisibleYesTablet2] = useState(0);
    const [isBorderVisibleYesTablet3, setIsBorderVisibleYesTablet3] = useState(0);
    const [isBorderVisibleNo, setIsBorderVisibleNo] = useState(0);
    const [isBorderVisibleNoTablet, setIsBorderVisibleNoTablet] = useState(0);
    const [isBorderVisibleNoTablet1, setIsBorderVisibleNoTablet1] = useState(0);
    const [isBorderVisibleNoTablet2, setIsBorderVisibleNoTablet2] = useState(0);
    const [isBorderVisibleNoTablet3, setIsBorderVisibleNoTablet3] = useState(0);
    const [isColorVisible, setIsColorVisible] = useState('');
    const [isColorVisibleTablet, setIsColorVisibleTablet] = useState('');
    const [isColorVisibleTablet1, setIsColorVisibleTablet1] = useState('');
    const [isColorVisibleTablet2, setIsColorVisibleTablet2] = useState('');
    const [isColorVisibleTablet3, setIsColorVisibleTablet3] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [isDisableTablet, setIsDisableTablet] = useState(false);
    const [isDisableTablet1, setIsDisableTablet1] = useState(false);
    const [isDisableTablet2, setIsDisableTablet2] = useState(false);
    const [isDisableTablet3, setIsDisableTablet3] = useState(false);

    const [isCheck, setIsCheck] = useState('co');
    const [co, setCo] = useState('yes');
    const [xuong, setXuong] = useState('yes');
    const [khop, setKhop] = useState('yes');
    const [deKhang, setDeKhang] = useState('yes');
    const [isCheckIcon1, setIsCheckIcon1] = useState(require('../assets/icon-default.png'));
    const [isCheckIcon2, setIsCheckIcon2] = useState(require('../assets/icon-default.png'));
    const [isCheckIcon3, setIsCheckIcon3] = useState(require('../assets/icon-default.png'));
    const [isCheckIcon4, setIsCheckIcon4] = useState(require('../assets/icon-default.png'));

    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const { imageUrls, loading, error } = useSelector((state: RootState) => state.images);

    const handleCancel = () => {
        console.log('Đã nhấn Hủy');
        setModalVisible(false);
    };

    const handleResume = () => {
        dispatch(
            addResult({
                co: co,
                xuong: xuong,
                khop: khop,
                deKhang: deKhang,
            })
        )
            .unwrap()
            .then((result) => {
                navigation.navigate('UserInfo', { resultId: result.id });
            })
            .catch((error) => {
                console.error('Lỗi khi thêm kết quả:', error);
            });
        setModalVisible(false);
    };


    // Cơ
    const isYesCo = () => {
        setIsImageTrue(require('../assets/icon-yes-big.png'));
        setIsBorderVisibleYes(1);
        setIsCheckIcon1(require('../assets/icon-true.png'));
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#73A442');
        setIsCheck('xuong');


        const timer = setTimeout(() => {
            setIsImageTrue(require('../assets/icon-yes.png'));
            setIsBorderVisibleYesTablet(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);



    }

    const isNoCo = () => {
        setIsImageFalse(require('../assets/icon-no-big.png'));
        setIsCheckIcon1(require('../assets/icon-false.png'));
        setIsBorderVisibleNo(1);
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#C6463A');
        setIsCheck('xuong');
        setCo('no');

        const timer = setTimeout(() => {
            setIsImageFalse(require('../assets/icon-no.png'));
            setIsBorderVisibleNo(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);
    }

    // Xương
    const isYesXuong = () => {
        setIsImageTrue(require('../assets/icon-yes-big.png'));
        setIsBorderVisibleYes(1);
        setIsCheckIcon2(require('../assets/icon-true.png'));
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#73A442');
        setIsCheck('khop');

        const timer = setTimeout(() => {
            setIsImageTrue(require('../assets/icon-yes.png'));
            setIsBorderVisibleYes(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);

    }

    const isNoXuong = () => {
        setIsImageFalse(require('../assets/icon-no-big.png'));
        setIsCheckIcon2(require('../assets/icon-false.png'));
        setIsBorderVisibleNo(1);
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#C6463A');
        setIsCheck('khop');
        setXuong('no');

        const timer = setTimeout(() => {
            setIsImageFalse(require('../assets/icon-no.png'));
            setIsBorderVisibleNo(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);
    }

    // khớp
    const isYesKhop = () => {
        setIsImageTrue(require('../assets/icon-yes-big.png'));
        setIsBorderVisibleYes(1);
        setIsCheckIcon3(require('../assets/icon-true.png'));
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#73A442');
        setIsCheck('deKhang');

        const timer = setTimeout(() => {
            setIsImageTrue(require('../assets/icon-yes.png'));
            setIsBorderVisibleYes(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);

    }

    const isNoKhop = () => {
        setIsImageFalse(require('../assets/icon-no-big.png'));
        setIsCheckIcon3(require('../assets/icon-false.png'));
        setIsBorderVisibleNo(1);
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#C6463A');
        setIsCheck('deKhang');
        setKhop('no');

        const timer = setTimeout(() => {
            setIsImageFalse(require('../assets/icon-no.png'));
            setIsBorderVisibleNo(0);
            setIsImageVisible(isImageVisible);
            setIsColorVisible('');
        }, 300);

        return () => clearTimeout(timer);
    }

    // Đề kháng 
    const isYesDeKhang = () => {
        setIsImageTrue(require('../assets/icon-yes-big.png'));
        setIsBorderVisibleYes(1);
        setIsCheckIcon4(require('../assets/icon-true.png'));
        setIsImageVisible(!isImageVisible);
        setIsColorVisible('#73A442');
        setIsDisable(true);
    }

    const isNoDeKhang = () => {
        setIsImageFalse(require('../assets/icon-no-big.png'));
        setIsCheckIcon4(require('../assets/icon-false.png'));
        setIsBorderVisibleNo(1);
        setIsImageVisible(!isImageVisible);
        setIsDisable(true);
        setIsColorVisible('#C6463A');
        setDeKhang('no');
    }

    /// Tablet
    // Cơ
    const isYesCoTablet = () => {
        setIsImageTrueTablet(require('../assets/icon-yes.png'));
        setIsBorderVisibleYesTablet(1);
        setIsImageVisibleTablet(!isImageVisibleTablet);
        setIsColorVisibleTablet('#73A442');
        setIsDisableTablet(true);

    }

    const isNoCoTablet = () => {
        setIsImageFalseTablet(require('../assets/icon-no.png'));
        setIsBorderVisibleNoTablet(1);
        setIsImageVisibleTablet(!isImageVisibleTablet);
        setIsColorVisibleTablet('#C6463A');
        setCo('no');
        setIsDisableTablet(true);

    }

    // Xương
    const isYesXuongTablet = () => {
        setIsImageTrueTablet1(require('../assets/icon-yes.png'));
        setIsBorderVisibleYesTablet1(1);
        setIsImageVisibleTablet1(!isImageVisibleTablet1);
        setIsColorVisibleTablet1('#73A442');
        setIsDisableTablet1(true);
    }

    const isNoXuongTablet = () => {
        setIsImageFalseTablet1(require('../assets/icon-no.png'));
        setIsBorderVisibleNoTablet1(1);
        setIsImageVisibleTablet1(!isImageVisibleTablet1);
        setIsColorVisibleTablet1('#C6463A');
        setXuong('no');
        setIsDisableTablet1(true);
    }

    // Khớp
    const isYesKhopTablet = () => {
        setIsImageTrueTablet2(require('../assets/icon-yes.png'));
        setIsBorderVisibleYesTablet2(1);
        setIsImageVisibleTablet2(!isImageVisibleTablet2);
        setIsColorVisibleTablet2('#73A442');
        setIsDisableTablet2(true);
    }

    const isNoKhopTablet = () => {
        setIsImageFalseTablet2(require('../assets/icon-no.png'));
        setIsBorderVisibleNoTablet2(1);
        setIsImageVisibleTablet2(!isImageVisibleTablet2);
        setIsColorVisibleTablet2('#C6463A');
        setKhop('no');
        setIsDisableTablet2(true);
    }

    // Đề kháng
    const isYesDeKhangTablet = () => {
        setIsImageTrueTablet3(require('../assets/icon-yes.png'));
        setIsBorderVisibleYesTablet3(1);
        setIsImageVisibleTablet3(!isImageVisibleTablet3);
        setIsColorVisibleTablet3('#73A442');
        setIsDisableTablet3(true);
    }

    const isNoDeKhangTablet = () => {
        setIsImageFalseTablet3(require('../assets/icon-no.png'));
        setIsBorderVisibleNoTablet3(1);
        setIsImageVisibleTablet3(!isImageVisibleTablet3);
        setIsColorVisibleTablet3('#C6463A');
        setDeKhang('no');
        setIsDisableTablet3(true);
    }


    return (
        <LinearGradient
            style={styles.container}
            colors={['rgba(14, 71, 14, 1)', 'rgb(68, 153, 45)', 'rgb(80, 164, 47)', 'rgba(19, 80, 14, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {isMobile ?
                <>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                            <Image source={require('../assets/icon-back.png')} />
                        </TouchableOpacity>
                        <TextTitle title='Trang 2/6' />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                            <Image source={require('../assets/icon-home.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.headerTitle}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>

                    {
                        (() => {
                            switch (isCheck) {


                                case 'co':
                                    return (
                                        <>
                                            <View style={styles.progressContainer}>
                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Image source={isCheckIcon1} />
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Cơ</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>2</Text>
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Xương</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>3</Text>
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Khớp</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>4</Text>
                                                    </View>
                                                    <Text style={styles.progressLabel}>Đề kháng</Text>
                                                </View>
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

                                            <View
                                                style={styles.exerciseContainer}

                                            >
                                                <Image source={imageUrls ? { uri: imageUrls[4] } : undefined} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                                                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                                                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}
                                            </View>
                                            <Text style={styles.exerciseDescription}>
                                                Thẳng lưng trước ghế, đứng lên
                                                ngồi xuống 5 lần từ 6-10 giây
                                            </Text>
                                            <View style={{ flexDirection: 'row', bottom: 10 }}>
                                                <TouchableOpacity style={[styles.btnResultContainerYes, { borderWidth: isBorderVisibleYes }]} onPress={() => isYesCo()}>
                                                    <Image source={isImageTrue} />
                                                    <Text style={styles.textResult}>Được</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.btnResultContainerNo, , { borderWidth: isBorderVisibleNo }]} onPress={() => isNoCo()}>
                                                    <Image source={isImageFalse} />
                                                    <Text style={styles.textResult}>Không được</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B8B8B8' disable={true} onPress={() => navigation.goBack()} />
                                        </>
                                    );

                                case 'xuong':
                                    return (

                                        <>
                                            <View style={styles.progressContainer}>
                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Image source={isCheckIcon1} />
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Cơ</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon2} />

                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Xương</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>3</Text>
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Khớp</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>4</Text>
                                                    </View>
                                                    <Text style={styles.progressLabel}>Đề kháng</Text>
                                                </View>
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
                                                    KIỂM TRA XƯƠNG
                                                </SvgText>
                                            </Svg>

                                            <View
                                                style={styles.exerciseContainer}

                                            >
                                                <Image source={imageUrls ? { uri: imageUrls[5] } : undefined} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                                                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                                                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}

                                            </View>
                                            <Text style={styles.exerciseDescription}>
                                                Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân
                                            </Text>
                                            <View style={{ flexDirection: 'row', bottom: 10 }}>
                                                <TouchableOpacity style={[styles.btnResultContainerYes, { borderWidth: isBorderVisibleYes }]} onPress={() => isYesXuong()}>
                                                    <Image source={isImageTrue} />
                                                    <Text style={styles.textResult}>Được</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.btnResultContainerNo, , { borderWidth: isBorderVisibleNo }]} onPress={() => isNoXuong()}>
                                                    <Image source={isImageFalse} />
                                                    <Text style={styles.textResult}>Không được</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B8B8B8' disable={true} onPress={() => navigation.goBack()} />
                                        </>
                                    );

                                case 'khop':
                                    return (
                                        <>
                                            <View style={styles.progressContainer}>
                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Image source={isCheckIcon1} />
                                                    </View>
                                                    <View style={styles.progressLine} />
                                                    <Text style={styles.progressLabel}>Cơ</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon2} />
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Xương</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon3} />
                                                    </View>
                                                    <View style={[styles.progressLine, { borderStyle: 'dashed', }]} />
                                                    <Text style={styles.progressLabel}>Khớp</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Text style={styles.progressCircleText}>4</Text>
                                                    </View>
                                                    <Text style={styles.progressLabel}>Đề kháng</Text>
                                                </View>
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
                                                    KIỂM TRA KHỚP
                                                </SvgText>
                                            </Svg>

                                            <View
                                                style={styles.exerciseContainer}

                                            >

                                                <Image source={imageUrls ? { uri: imageUrls[6] } : undefined} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                                                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                                                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}
                                            </View>
                                            <Text style={styles.exerciseDescription}>
                                                Đứng rộng chân, lưng thẳng đứng,
                                                tay đưa ra sau và đan vào nhau
                                            </Text>
                                            <View style={{ flexDirection: 'row', bottom: 10 }}>
                                                <TouchableOpacity style={[styles.btnResultContainerYes, { borderWidth: isBorderVisibleYes }]} onPress={() => isYesKhop()}>
                                                    <Image source={isImageTrue} />
                                                    <Text style={styles.textResult}>Được</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.btnResultContainerNo, , { borderWidth: isBorderVisibleNo }]} onPress={() => isNoKhop()}>
                                                    <Image source={isImageFalse} />
                                                    <Text style={styles.textResult}>Không được</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B8B8B8' disable={true} onPress={() => navigation.goBack()} />
                                        </>
                                    );

                                case 'deKhang':
                                    return (
                                        <>
                                            <View style={styles.progressContainer}>
                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        <Image source={isCheckIcon1} />
                                                    </View>
                                                    <View style={styles.progressLine} />
                                                    <Text style={styles.progressLabel}>Cơ</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon2} />
                                                    </View>
                                                    <View style={styles.progressLine} />
                                                    <Text style={styles.progressLabel}>Xương</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon3} />
                                                    </View>
                                                    {isCheckIcon4 === require('../assets/icon-true.png') || isCheckIcon4 === require('../assets/icon-false.png') ?
                                                        (<View style={styles.progressLine} />)
                                                        :
                                                        (<View style={[styles.progressLine, { borderStyle: 'dashed', }]} />)
                                                    }
                                                    <Text style={styles.progressLabel}>Khớp</Text>
                                                </View>

                                                <View style={styles.progressItem}>
                                                    <View style={styles.progressCircle}>
                                                        < Image source={isCheckIcon4} />
                                                    </View>
                                                    <Text style={styles.progressLabel}>Đề kháng</Text>
                                                </View>
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
                                                    KIỂM TRA ĐỀ KHÁNG
                                                </SvgText>
                                            </Svg>

                                            <View
                                                style={styles.exerciseContainer}

                                            >

                                                <Image source={imageUrls ? { uri: imageUrls[7] } : undefined} style={[styles.exerciseImage, isImageVisible && { borderWidth: 3, borderColor: isColorVisible }]} />
                                                {isColorVisible == '#73A442' ? isImageVisible && (<Image source={require('../assets/icon-true-image.png')} style={styles.exerciseIcon} />) :
                                                    isImageVisible && (<Image source={require('../assets/icon-false-image.png')} style={styles.exerciseIcon} />)}
                                            </View>
                                            <Text style={styles.exerciseDescription}>
                                                6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?
                                            </Text>
                                            <View style={{ flexDirection: 'row', bottom: 10 }}>
                                                <TouchableOpacity disabled={isDisable} style={[styles.btnResultContainerYes, { borderWidth: isBorderVisibleYes }]} onPress={() => isYesDeKhang()}>
                                                    <Image source={isImageTrue} />
                                                    <Text style={styles.textResult}>Hiếm khi</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity disabled={isDisable} style={[styles.btnResultContainerNo, , { borderWidth: isBorderVisibleNo }]} onPress={() => isNoDeKhang()}>
                                                    <Image source={isImageFalse} />
                                                    <Text style={styles.textResult}>Nhiều lần</Text>
                                                </TouchableOpacity>
                                            </View>
                                            {isCheckIcon4 === require('../assets/icon-true.png') || isCheckIcon4 === require('../assets/icon-false.png') ?
                                                (<BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B70002' disable={false} onPress={() => setModalVisible(true)} />)
                                                :
                                                (<BtnSubmit title='XÁC NHẬN' width={160} height={44} radius={24} color='#B8B8B8' disable={true} onPress={() => navigation.goBack()} />)
                                            }
                                        </>
                                    );
                                default:
                                    return null;

                            }

                        })()
                    }
                </>
                :
                <>
                    <View style={isTablet ? stylesTablet.header : stylesWeb.header}>
                        {isTablet ?
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                                <Image source={require('../assets/icon-back.png')} />
                            </TouchableOpacity>
                            :
                            <Image style={stylesWeb.imageLogo} source={require('../assets/text-logo.png')} />
                        }

                        <TextTitle color='#FFF' title='Trang 2/6' />



                        <TouchableOpacity style={isWeb && { marginLeft: '170%', alignItems: 'center' }} activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                            <Image source={require('../assets/icon-home.png')} />
                            {isWeb && <Text style={{ color: '#FFF', fontSize: 9, }}> Trang chủ</Text>}
                        </TouchableOpacity>
                    </View>
                    {isTablet &&
                        <Image style={stylesTablet.imageLogo} source={require('../assets/text-logo.png')} />}
                    <Svg height="60" width="353" viewBox="0 0 319 84">
                        <Defs>
                            <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                <Stop offset="5%" stopColor="#BA872C" stopOpacity="0.8" />
                                <Stop offset="20%" stopColor="#E1D770" stopOpacity="1" />
                                <Stop offset="88%" stopColor="#E1D770" stopOpacity="1" />
                                <Stop offset="100%" stopColor="#885021" stopOpacity="0.8" />
                            </SvgLinearGradient>
                        </Defs>

                        <SvgText
                            fill="rgba(0, 0, 0, 0.5)"
                            fontSize="32"
                            fontWeight="700"
                            x="32%"
                            y="35"
                            textAnchor="middle"
                            dx="1"
                            dy="1"
                        >
                            4 BƯỚC ĐƠN GIẢN
                        </SvgText>
                        <SvgText
                            fill="url(#gradientText)"
                            fontSize="32"
                            fontWeight="700"
                            x="32%"
                            y="35"
                            textAnchor="middle"
                        >
                            4 BƯỚC ĐƠN GIẢN
                        </SvgText>

                        <SvgText
                            fill="rgba(0, 0, 0, 0.5)"
                            fontSize="32"
                            fontWeight="700"
                            x="32%"
                            y="74"
                            textAnchor="middle"
                            dx="1"
                            dy="1"
                        >
                            ĐỂ KIỂM TRA CƠ-XƯƠNG-KHỚP
                        </SvgText>
                        <SvgText
                            fill="url(#gradientText)"
                            fontSize="32"
                            fontWeight="700"
                            x="32%"
                            y="74"
                            textAnchor="middle"
                        >
                            ĐỂ KIỂM TRA CƠ-XƯƠNG-KHỚP
                        </SvgText>
                    </Svg>

                    <Text style={stylesTablet.textBody}>Bạn có dễ dàng thực hiện các động tác dưới đây không?</Text>
                    <View style={stylesTablet.container}>
                        <View style={stylesTablet.grContainer}>
                            <View style={stylesTablet.exerciseContainer}>
                                <Text style={stylesTablet.textTitle}>KIỂM TRA CƠ</Text>
                                <Image source={imageUrls ? { uri: imageUrls[4] } : undefined} style={[stylesTablet.exerciseImage, isImageVisibleTablet && { borderWidth: 3, borderColor: isColorVisibleTablet }]} />
                                {isColorVisibleTablet == '#73A442' ? isImageVisibleTablet && (<Image source={require('../assets/icon-true-image-small.png')} style={stylesTablet.exerciseIcon} />) :
                                    isImageVisibleTablet && (<Image source={require('../assets/icon-false-image-small.png')} style={stylesTablet.exerciseIcon} />)}
                            </View>
                            <Text style={stylesTablet.exerciseDescription}>
                                Thẳng lưng trước ghế, đứng lên
                                ngồi xuống 5 lần từ 6-10 giây
                            </Text>
                            <View style={{ flexDirection: 'row', top: '4%' }}>
                                <TouchableOpacity disabled={isDisableTablet} style={[stylesTablet.btnResultContainerYes, { borderWidth: isBorderVisibleYesTablet }]} onPress={() => isYesCoTablet()}>
                                    <Image source={isImageTrueTablet} />
                                    <Text style={stylesTablet.textResult}>Được</Text>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={isDisableTablet} style={[stylesTablet.btnResultContainerNo, , { borderWidth: isBorderVisibleNoTablet }]} onPress={() => isNoCoTablet()}>
                                    <Image source={isImageFalseTablet} />
                                    <Text style={stylesTablet.textResult}>Không được</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={stylesTablet.grContainer}>
                            <View style={stylesTablet.exerciseContainer}>
                                <Text style={stylesTablet.textTitle}>KIỂM TRA XƯƠNG</Text>
                                <Image source={imageUrls ? { uri: imageUrls[5] } : undefined} style={[stylesTablet.exerciseImage, isImageVisibleTablet1 && { borderWidth: 3, borderColor: isColorVisibleTablet1 }]} />
                                {isColorVisibleTablet1 == '#73A442' ? isImageVisibleTablet1 && (<Image source={require('../assets/icon-true-image-small.png')} style={stylesTablet.exerciseIcon} />) :
                                    isImageVisibleTablet1 && (<Image source={require('../assets/icon-false-image-small.png')} style={stylesTablet.exerciseIcon} />)}
                            </View>
                            <Text style={stylesTablet.exerciseDescription}>
                                Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân
                            </Text>
                            <View style={{ flexDirection: 'row', top: '4%' }}>
                                <TouchableOpacity disabled={isDisableTablet1} style={[stylesTablet.btnResultContainerYes, { borderWidth: isBorderVisibleYesTablet1 }]} onPress={() => isYesXuongTablet()}>
                                    <Image source={isImageTrueTablet1} />
                                    <Text style={stylesTablet.textResult}>Được</Text>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={isDisableTablet1} style={[stylesTablet.btnResultContainerNo, , { borderWidth: isBorderVisibleNoTablet1 }]} onPress={() => isNoXuongTablet()}>
                                    <Image source={isImageFalseTablet1} />
                                    <Text style={stylesTablet.textResult}>Không được</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={stylesTablet.grContainer}>
                            <View style={stylesTablet.exerciseContainer}>
                                <Text style={stylesTablet.textTitle}>KIỂM TRA KHỚP</Text>
                                <Image source={imageUrls ? { uri: imageUrls[6] } : undefined} style={[stylesTablet.exerciseImage, isImageVisibleTablet2 && { borderWidth: 3, borderColor: isColorVisibleTablet2 }]} />
                                {isColorVisibleTablet2 == '#73A442' ? isImageVisibleTablet2 && (<Image source={require('../assets/icon-true-image-small.png')} style={stylesTablet.exerciseIcon} />) :
                                    isImageVisibleTablet2 && (<Image source={require('../assets/icon-false-image-small.png')} style={stylesTablet.exerciseIcon} />)}
                            </View>
                            <Text style={stylesTablet.exerciseDescription}>
                                Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau
                            </Text>
                            <View style={{ flexDirection: 'row', top: '4%' }}>
                                <TouchableOpacity disabled={isDisableTablet2} style={[stylesTablet.btnResultContainerYes, { borderWidth: isBorderVisibleYesTablet2 }]} onPress={() => isYesKhopTablet()}>
                                    <Image source={isImageTrueTablet2} />
                                    <Text style={stylesTablet.textResult}>Được</Text>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={isDisableTablet2} style={[stylesTablet.btnResultContainerNo, , { borderWidth: isBorderVisibleNoTablet2 }]} onPress={() => isNoKhopTablet()}>
                                    <Image source={isImageFalseTablet2} />
                                    <Text style={stylesTablet.textResult}>Không được</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={stylesTablet.grContainer}>
                            <View style={stylesTablet.exerciseContainer}>
                                <Text style={stylesTablet.textTitle}>KIỂM TRA SỨC ĐỀ KHÁNG</Text>
                                <Image source={imageUrls ? { uri: imageUrls[7] } : undefined} style={[stylesTablet.exerciseImage, isImageVisibleTablet3 && { borderWidth: 3, borderColor: isColorVisibleTablet3 }]} />
                                {isColorVisibleTablet3 == '#73A442' ? isImageVisibleTablet3 && (<Image source={require('../assets/icon-true-image-small.png')} style={stylesTablet.exerciseIcon} />) :
                                    isImageVisibleTablet3 && (<Image source={require('../assets/icon-false-image-small.png')} style={stylesTablet.exerciseIcon} />)}
                            </View>
                            <Text style={stylesTablet.exerciseDescription}>
                                6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?
                            </Text>
                            <View style={{ flexDirection: 'row', top: '4%' }}>
                                <TouchableOpacity disabled={isDisableTablet3} style={[stylesTablet.btnResultContainerYes, { borderWidth: isBorderVisibleYesTablet3 }]} onPress={() => isYesDeKhangTablet()}>
                                    <Image source={isImageTrueTablet3} />
                                    <Text style={stylesTablet.textResult}>Được</Text>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={isDisableTablet3} style={[stylesTablet.btnResultContainerNo, , { borderWidth: isBorderVisibleNoTablet3 }]} onPress={() => isNoDeKhangTablet()}>
                                    <Image source={isImageFalseTablet3} />
                                    <Text style={stylesTablet.textResult}>Không được</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    {isDisableTablet === true && isDisableTablet1 === true && isDisableTablet2 === true && isDisableTablet3 === true ?
                        (<BtnSubmit title='XÁC NHẬN' width={isTablet ? 220 : 120} height={isTablet ? 52 : 32} radius={24} color='#B70002' disable={false} onPress={() => setModalVisible(true)} />)
                        :
                        (<BtnSubmit title='XÁC NHẬN' width={isTablet ? 220 : 120} height={isTablet ? 52 : 32} radius={24} color='#B8B8B8' disable={true} onPress={() => navigation.goBack()} />)
                    }
                </>

            }

            {isMobile ?
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>CẢM ƠN</Text>
                            <Text style={styles.modalMessage}>
                                Bạn đã tham gia bài kiểm tra sức khoẻ{"\n"}
                                Hãy tiếp tục để có thể nhận kết quả{"\n"}
                                kiểm tra sức khoẻ của bạn.
                            </Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.cancelButton]}
                                    onPress={handleCancel}
                                >
                                    <Text style={styles.cancelButtonText}>HỦY</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.okButton]}
                                    onPress={handleResume}
                                >
                                    <Text style={styles.okButtonText}>TIẾP TỤC</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                :
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={stylesTablet.modalContainer}>
                        <View style={stylesTablet.modalContent}>
                            <Text style={stylesTablet.modalTitle}>CẢM ƠN</Text>
                            <Text style={stylesTablet.modalMessage}>
                                Bạn đã tham gia bài kiểm tra sức khoẻ{"\n"}
                                Hãy tiếp tục để có thể nhận kết quả{"\n"}
                                kiểm tra sức khoẻ của bạn.
                            </Text>
                            <View style={stylesTablet.buttonContainer}>
                                <TouchableOpacity
                                    style={[stylesTablet.modalButton, stylesTablet.cancelButton]}
                                    onPress={handleCancel}
                                >
                                    <Text style={stylesTablet.cancelButtonText}>HỦY</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[stylesTablet.modalButton, stylesTablet.okButton]}
                                    onPress={handleResume}
                                >
                                    <Text style={stylesTablet.okButtonText}>TIẾP TỤC</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            <Text style={isTablet ? stylesTablet.textNote : styles.textNote}>*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.</Text>
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
        top: '5%',
        position: 'absolute',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    headerTitle: {
        marginTop: '20%',
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
        flexDirection: 'row'
    },
    exerciseImage: {
        width: 327,
        height: 317,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    exerciseIcon: {
        position: 'absolute',
        alignContent: 'center',
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
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
    btnResultContainerYes: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#71A162',
        borderRadius: 10.29,
        margin: 10,
        borderColor: '#FFC200',
    },
    btnResultContainerNo: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#71A162',
        borderRadius: 10.29,
        margin: 10,
        borderColor: '#FFC200',
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
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        color: '#478449',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        color: '#555',
        lineHeight: 18.83,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderColor: '#B70002',
        borderWidth: 1.5,
    },
    okButton: {
        backgroundColor: '#B70002',
        borderRadius: 30,
    },
    cancelButtonText: {
        color: '#B70002',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
});

const stylesTablet = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    header: {
        top: '5%',
        position: 'absolute',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    grContainer: {
        alignItems: 'center',
        padding: '1%',
    },
    imageLogo: {
        marginTop: '5%',
        width: 132,
        height: 36,
    },
    textBody: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 25,
    },
    exerciseContainer: {
        alignItems: 'center'
    },
    textTitle: {
        paddingTop: 3,
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 15,
        textAlign: 'center',
        color: '#FFF'
    },
    exerciseImage: {
        width: 225,
        height: 230,
        top: '4%',
        borderRadius: 12,
    },
    exerciseDescription: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '400',
        color: '#FFF',
        width: 225,
        textAlign: 'center',
        top: '5%',
        height: '14%',
    },
    btnResultContainerYes: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        backgroundColor: '#71A162',
        borderRadius: 12,
        margin: 10,
        borderColor: '#FFC200',
    },
    btnResultContainerNo: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        backgroundColor: '#71A162',
        borderRadius: 12,
        margin: 10,
        borderColor: '#FFC200',
    },
    textResult: {
        fontSize: 10.19,
        lineHeight: 13.59,
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
        top: 5,
    },
    textNote: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
        top: '1%'
    },
    exerciseIcon: {
        position: 'absolute',
        alignContent: 'center',
        right: '-5%',
        top: '6%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 432,
        height: 255,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        color: '#478449',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        color: '#555',
        lineHeight: 18.83,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderColor: '#B70002',
        borderWidth: 1.5,
    },
    okButton: {
        backgroundColor: '#B70002',
        borderRadius: 30,
    },
    cancelButtonText: {
        color: '#B70002',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
});

const stylesWeb = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    header: {
        top: '5%',
        position: 'absolute',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    grContainer: {
        alignItems: 'center',
        padding: '1%',
    },

    imageLogo: {
        marginRight: '170%',
        width: 132,
        height: 36,
    },
    textBody: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 25,
    },
    exerciseContainer: {
        alignItems: 'center'
    },
    textTitle: {
        paddingTop: 3,
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 15,
        textAlign: 'center',
        color: '#FFF'
    },
    exerciseImage: {
        width: 225,
        height: 230,
        top: '4%',
        borderRadius: 12,
    },
    exerciseDescription: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '400',
        color: '#FFF',
        width: 225,
        textAlign: 'center',
        top: '5%',
        height: '14%',
    },
    btnResultContainerYes: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        backgroundColor: '#71A162',
        borderRadius: 12,
        margin: 10,
        borderColor: '#FFC200',
    },
    btnResultContainerNo: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        backgroundColor: '#71A162',
        borderRadius: 12,
        margin: 10,
        borderColor: '#FFC200',
    },
    textResult: {
        fontSize: 10.19,
        lineHeight: 13.59,
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
        top: 5,
    },
    textNote: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
        top: '1%'
    },
    exerciseIcon: {
        position: 'absolute',
        alignContent: 'center',
        right: '-5%',
        top: '6%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 432,
        height: 255,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        color: '#478449',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        color: '#555',
        lineHeight: 18.83,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderColor: '#B70002',
        borderWidth: 1.5,
    },
    okButton: {
        backgroundColor: '#B70002',
        borderRadius: 30,
    },
    cancelButtonText: {
        color: '#B70002',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 21.92,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default Check;