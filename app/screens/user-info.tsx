import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import TextInputUser from '../components/TextInput/textInputUser';
import { CheckBox } from 'react-native-elements';

const UserInfo: React.FC = () => {
    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');

    const submit = () => {
        if (name.length === 0) {
            setError('Vui lòng nhập họ và tên');
            return;
        }
        if (phone.length === 0) {
            setError1('Vui lòng nhập số điện thoại');
            return;
        }
        setName('');
        setPhone('');
        setEmail('');
        navigation.navigate('ProInfo');
    }

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
                <TextTitle title='Trang 3/6' />
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('../assets/icon-home.png')} />
                </TouchableOpacity>
            </View>

            <Image style={styles.textLogo} source={require('../assets/text-logo.png')} />

            <Text style={styles.headerTitle}>HOÀN THÀNH BÀI KIỂM TRA</Text>

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
            <Text style={styles.exerciseDescriptionInfo}>
                Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.
            </Text>

            <View>
                <TextInputUser title='Họ tên:*' placeholder='Nhập họ và tên' value={name} keyBoardType='default' onChangeText={setName} />
                {name.length > 0 ? <Text></Text> : <Text style={styles.error}>{error}</Text>}
                <TextInputUser title='Số điện thoại:*' placeholder='Nhập số điện thoại' value={phone} keyBoardType='numeric' onChangeText={setPhone} />
                {name.length > 0 ? <Text></Text> : <Text style={styles.error}>{error1}</Text>}
                <TextInputUser title='Email:' placeholder='Nhập email' value={email} keyBoardType='email-address' onChangeText={setEmail} />
            </View>
            <View style={{ marginBottom: '40%' }}>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        containerStyle={styles.checkbox}
                    />
                    <Text style={styles.textCheckBox}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textNote}>*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.</Text>
                </View>
            </View>

            <BtnSubmit title='HOÀN THÀNH' width={160} height={44} radius={24} color='#B8B8B8' onPress={submit} />

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
        color: '#ECD24A',
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
        color: '#FFC700',
    },
});

export default UserInfo;