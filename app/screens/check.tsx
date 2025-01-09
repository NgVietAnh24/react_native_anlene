import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
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
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isImageTrue, setIsImageTrue] = useState(require('../assets/icon-yes.png'));
    const [isImageFalse, setIsImageFalse] = useState(require('../assets/icon-no.png'));
    const [isBorderVisibleYes, setIsBorderVisibleYes] = useState(0);
    const [isBorderVisibleNo, setIsBorderVisibleNo] = useState(0);
    const [isColorVisible, setIsColorVisible] = useState('');
    const [isDisable, setIsDisable] = useState(false);
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

    // const results = useSelector((state: RootState) => state.results.data);


    const { imageUrls, loading, error } = useSelector((state: RootState) => state.images);

    // useEffect(() => {
    //     countResults();
    // });

    // const countResults = () => {
    //     let noCount = 0;

    //     results.forEach(result => {

    //         if (result.co === 'no') noCount++;
    //         if (result.xuong === 'no') noCount++;
    //         if (result.khop === 'no') noCount++;
    //         if (result.deKhang === 'no') noCount++;
    //     });
    //     console.log('Hiển thị kết quả no === ' + noCount);

    //     return { noCount };
    // };

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
        // navigation.navigate('UserInfo');
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
            setIsBorderVisibleYes(0);
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





    return (
        <LinearGradient
            style={styles.container}
            colors={['rgba(14, 71, 14, 1)', 'rgb(68, 153, 45)', 'rgb(80, 164, 47)', 'rgba(19, 80, 14, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
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
        // zIndex: 1,
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
        // borderWidth: 1,
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
        // borderWidth: 1,
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
        // width: 140,
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