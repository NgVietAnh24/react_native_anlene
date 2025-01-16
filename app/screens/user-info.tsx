import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, useWindowDimensions, DevSettings } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextInputUser from '../components/TextInput/textInputUser';
import { CheckBox } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { addUser } from '../slices/userSlice';
import { AppDispatch, RootState } from '../store/store';
import { deleteResultById } from '../slices/resultSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'UserInfo'>;


const UserInfo: React.FC<Props> = ({ navigation, route }) => {
    const { width, height } = useWindowDimensions();

    const isTablet = width >= 768 && width <= 1024;
    const isWeb = width > 1024;
    const isMobile = width < 768;

    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const results = useSelector((state: RootState) => state.results.data);

    useEffect(() => {
        // countResults();
    });

    let noCount = 0;

    results.forEach(result => {

        if (result.co === 'no') noCount++;
        if (result.xuong === 'no') noCount++;
        if (result.khop === 'no') noCount++;
        if (result.deKhang === 'no') noCount++;
    });
    console.log('Hiển thị kết quả no user === ' + noCount);

    const { resultId } = route.params;

    const handleCancel = () => {
        console.log('Đã nhấn Hủy' + resultId);
        setModalVisible(false);
    };

    const reloadApp = () => {
        if (__DEV__) {
            DevSettings.reload();
        }
    };




    const handleYes = () => {
        setModalVisible(false);
        dispatch(deleteResultById(resultId));
        navigation.navigate('Check');
    };
    const submit = () => {
        noCount = 0;
        if (!/^\d+$/.test(phone) || phone.length < 10 || phone.length > 11) {
            setError1('Số điện thoại chỉ được chứa 10 hoặc 11 chữ số');
            return;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Email không hợp lệ');
            return;
        }

        setError('');
        setError1('');

        const currentDate = new Date();
        const formattedDate = format(currentDate, 'dd/MM/yyyy HH:mm:ss');
        console.log(formattedDate);

        dispatch(
            addUser({
                resultId,
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim() || '',
                contact: checked.toString() || '',
                createdAt: formattedDate,
            })
        )
            .unwrap()
            .then(() => {
                setName('');
                setPhone('');
                setEmail('');
                navigation.navigate('ProInfo');
            })
            .catch((error) => {
                console.error('Lỗi khi thêm user:', error);
            });
    };





    return (
        <LinearGradient
            style={styles.container}
            colors={noCount === 0
                ? ['rgba(14, 71, 14, 1)', 'rgb(68, 153, 45)', 'rgb(80, 164, 47)', 'rgba(19, 80, 14, 1)']
                : noCount === 1
                    ? ['rgba(253, 149, 0, 1)', 'rgba(254, 191, 0, 1)', 'rgba(251, 132, 2, 1)']
                    : ['rgba(150, 150, 150, 1)', 'rgba(150, 150, 150, 1)']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.header}>
                {isMobile &&
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                        <Image source={require('../assets/icon-back.png')} />
                    </TouchableOpacity>}
                {isTablet &&
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                        <Image source={require('../assets/icon-back.png')} />
                    </TouchableOpacity>}
                <TextTitle color='#FFF' title='Trang 3/6' />
                <TouchableOpacity style={isWeb && { alignItems: 'center', right: '-450%', position: 'absolute' }} activeOpacity={0.7} onPress={() => reloadApp()}>
                    <Image source={require('../assets/icon-home.png')} />
                    {isWeb && <Text style={{ color: '#FFF' }}>Trang chủ</Text>}
                </TouchableOpacity>
            </View>

            <Image style={isMobile ? styles.textLogo : isTablet ? styles.textLogo : stylesWeb.textLogo} source={require('../assets/text-logo.png')} />

            <Text style={[styles.headerTitle, { color: noCount === 0 ? '#ECD24A' : noCount === 1 ? '#187B33' : '#DF1E13' }]}>HOÀN THÀNH BÀI KIỂM TRA</Text>

            {noCount === 0
                ?
                <>
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
                            XIN CHÚC MỪNG
                        </SvgText>
                    </Svg>
                    <Text style={styles.exerciseDescription}>
                        Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt.
                    </Text>
                </>
                :
                noCount === 1
                    ?
                    <>
                        <Svg height="40" width="319" viewBox="0 0 319 84">
                            <Defs>
                                <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="#376E48" stopOpacity="1" />
                                    <Stop offset="100%" stopColor="#187B33" stopOpacity="1" />
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
                                LƯU Ý MỘT CHÚT!
                            </SvgText>
                        </Svg>
                        <Text style={isMobile ? styles.exerciseDescription : stylesTablet.exerciseDescription}>
                            Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng hơn nhé...
                        </Text>
                    </>
                    :
                    <>
                        <Svg height="40" width="319" viewBox="0 0 319 84">
                            <Defs>
                                <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="#DF1E13" stopOpacity="1" />
                                    <Stop offset="100%" stopColor="#DF1E13" stopOpacity="1" />
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
                                LƯU Ý MỘT CHÚT!
                            </SvgText>
                        </Svg>
                        <Text style={styles.exerciseDescription}>
                            Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé,
                            bởi sau tuổi 40,...
                        </Text>
                    </>
            }


            <Text style={isMobile ? styles.exerciseDescriptionInfo : stylesTablet.exerciseDescriptionInfo}>
                Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.
            </Text>

            <View>
                <TextInputUser title='Họ tên:' width={isMobile ? 327 : 660} color={noCount === 1 ? '#376E48' : '#ECD24A'} borderColor={name.trim() ? '' : noCount === 1 ? '#376E48' : '#ECD24A'} placeholder='Nhập họ và tên' value={name} keyBoardType='default' onChangeText={setName} />
                <Text style={[styles.error, { color: noCount === 1 ? '#376E48' : '#ECD24A' }]}>{name.length > 0 ? '' : 'Vui lòng nhập họ và tên'}</Text>
                <TextInputUser title='Số điện thoại:' width={isMobile ? 327 : 660} color={noCount === 1 ? '#376E48' : '#ECD24A'} borderColor={phone.trim() ? '' : noCount === 1 ? '#376E48' : '#ECD24A'} placeholder='Nhập số điện thoại' value={phone} keyBoardType='numeric' onChangeText={setPhone} />
                <Text style={[styles.error, { color: noCount === 1 ? '#376E48' : '#ECD24A' }]}>{phone.length > 0 ? error1 : 'Vui lòng nhập số điện thoại'}</Text>
                <TextInputUser title='Email:' width={isMobile ? 327 : 660} color={noCount === 1 ? '#376E48' : '#ECD24A'} placeholder='Nhập email' value={email} keyBoardType='email-address' onChangeText={setEmail} />
                <Text style={[styles.error, { color: noCount === 1 ? '#376E48' : '#ECD24A' }]}>{email.length > 0 && error}</Text>
            </View>
            <View style={{ marginBottom: '30%' }}>
                <View style={isMobile ? styles.checkBoxContainer : stylesTablet.checkBoxContainer}>
                    <CheckBox
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        containerStyle={isMobile ? styles.checkbox : stylesTablet.checkbox}
                    />
                    <Text style={isMobile ? styles.textCheckBox : stylesTablet.textCheckBox}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={isMobile ? styles.textNote : stylesTablet.textNote}>Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene</Text>
                </View>
            </View>

            {isMobile ?
                name.length > 0 && phone.length > 0 && email.length > 0 ?
                    (<BtnSubmit title='HOÀN THÀNH' width={160} height={44} radius={24} disable={false} color='#B70002' onPress={submit} />)
                    :
                    (<BtnSubmit title='HOÀN THÀNH' width={160} height={44} radius={24} disable={true} color='#B8B8B8' onPress={submit} />)
                :
                isTablet ?
                    name.length > 0 && phone.length > 0 && email.length > 0 ?
                        (
                            <View style={{ bottom: '30%', flexDirection: 'row' }}>
                                <BtnSubmit title='TRỞ VỀ' width={220} height={52} radius={24} disable={false} textColor='#73A442' border='#73A442' color='#FFF' onPress={() => setModalVisible(true)} />
                                <View style={{ width: '4%' }} />
                                <BtnSubmit title='HOÀN THÀNH' width={220} height={52} radius={24} disable={false} color='#B70002' onPress={submit} />
                            </View>
                        )
                        :
                        (<View style={{ bottom: '30%', flexDirection: 'row' }}>
                            <BtnSubmit title='TRỞ VỀ' width={220} height={52} radius={24} disable={false} textColor='#73A442' border='#73A442' color='#FFF' onPress={() => setModalVisible(true)} />
                            <View style={{ width: '4%' }} />
                            <BtnSubmit title='HOÀN THÀNH' width={220} height={52} radius={24} disable={true} color='#B8B8B8' onPress={submit} />
                        </View>)
                    :
                    name.length > 0 && phone.length > 0 && email.length > 0 ?
                        (
                            <View style={{ bottom: '60%', flexDirection: 'row' }}>
                                <BtnSubmit title='TRỞ VỀ' width={220} height={52} radius={24} disable={false} textColor='#73A442' border='#73A442' color='#FFF' onPress={() => setModalVisible(true)} />
                                <View style={{ width: '4%' }} />
                                <BtnSubmit title='HOÀN THÀNH' width={220} height={52} radius={24} disable={false} color='#B70002' onPress={submit} />
                            </View>
                        )
                        :
                        (<View style={{ bottom: '60%', flexDirection: 'row' }}>
                            <BtnSubmit title='TRỞ VỀ' width={220} height={52} radius={24} disable={false} textColor='#73A442' border='#73A442' color='#FFF' onPress={() => setModalVisible(true)} />
                            <View style={{ width: '4%' }} />
                            <BtnSubmit title='HOÀN THÀNH' width={220} height={52} radius={24} disable={true} color='#B8B8B8' onPress={submit} />
                        </View>)
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={isMobile ? styles.modalContent : stylesTablet.modalContent}>
                        <Text style={styles.modalTitle}>THÔNG BÁO!</Text>
                        <Text style={styles.modalMessage}>
                            Bạn có muốn huỷ bỏ kết quả{"\n"}
                            kiểm tra sức khoẻ trước đó không?
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
                                onPress={handleYes}
                            >
                                <Text style={styles.okButtonText}>ĐỒNG Ý</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 18,
        paddingHorizontal: 20,
        position: 'absolute',
    },
    headerTitle: {
        width: 235,
        height: 36,
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 17.81,
        textAlign: 'center',
        padding: 5,
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginTop: '25%',
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
    textNote: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16,
        width: 310,
        top: 10,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
    },
    exerciseDescription: {
        width: '80%',
        fontSize: 12,
        lineHeight: 20.18,
        bottom: 5,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    exerciseDescriptionInfo: {
        width: '80%',
        fontSize: 15,
        lineHeight: 20.18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    error: {
        top: '10%',
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
    exerciseDescription: {
        width: 622,
        fontSize: 12,
        lineHeight: 20.18,
        bottom: 5,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    exerciseDescriptionInfo: {
        width: '50%',
        fontSize: 15,
        lineHeight: 20.18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCheckBox: {
        color: '#FFF',
        lineHeight: 20.18,
        fontSize: 15,
        fontWeight: '500',
        width: 660,
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        bottom: '19%',
        left: '3%',
    },
    textNote: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        width: 660,
        top: '40%',
        fontStyle: 'italic',
        color: '#FFF',
        left: '4%',
    },
    modalContent: {
        width: 420,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
});

const stylesWeb = StyleSheet.create({
    exerciseDescription: {
        width: 622,
        fontSize: 12,
        lineHeight: 20.18,
        bottom: 5,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    exerciseDescriptionInfo: {
        width: '50%',
        fontSize: 15,
        lineHeight: 20.18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCheckBox: {
        color: '#FFF',
        lineHeight: 20.18,
        fontSize: 15,
        fontWeight: '500',
        width: 660,
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        bottom: '19%',
        left: '3%',
    },
    textNote: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        width: 660,
        top: '40%',
        fontStyle: 'italic',
        color: '#FFF',
        left: '4%',
    },
    modalContent: {
        width: 420,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    textLogo: {
        height: 31,
        width: 116.85,
        marginTop: '25%',
        marginRight: '80%'
    },
});

export default UserInfo;