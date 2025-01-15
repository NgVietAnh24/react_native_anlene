import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions, DevSettings } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import BtnSubmit from '../components/Button/btnSubmit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList>;


const ProInfo: React.FC<Props> = ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    const isTablet = width >= 768 && width <= 1024;
    const isWeb = width > 1024;
    const isMobile = width < 768;

    const [seeMore, setSeeMore] = useState(false);
    const results = useSelector((state: RootState) => state.results.data);
    const { imageUrls, loading, error } = useSelector((state: RootState) => state.images);

    let noCount = 0;

    results.forEach(result => {

        if (result.co === 'no') noCount++;
        if (result.xuong === 'no') noCount++;
        if (result.khop === 'no') noCount++;
        if (result.deKhang === 'no') noCount++;
    });
    console.log('Hiển thị kết quả no pro-info === ' + noCount);

    const reloadApp = () => {
        if (__DEV__) {
            DevSettings.reload();
        }
    };

    const nextPage = () => {
        noCount = 0;
        navigation.navigate('BuyNow')
    }

    return (
        <ScrollView>
            {isMobile ?
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
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/icon-back.png')} />
                        </TouchableOpacity>
                        <TextTitle title='Trang 4/6' />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => reloadApp()}>
                            <Image source={require('../assets/icon-home.png')} />
                        </TouchableOpacity>
                    </View>

                    <Image style={isMobile ? styles.textLogo : stylesTablet.textLogo} source={require('../assets/text-logo.png')} />

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
                                Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
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
                                <Text style={styles.exerciseDescription}>
                                    Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm:
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
                                        HÃY CẨN THẬN!
                                    </SvgText>
                                </Svg>
                                <Text style={styles.exerciseDescription}>
                                    Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé,
                                    bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp
                                    suy giảm:
                                </Text>
                            </>



                    }

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
                            <Image source={require('../assets/khop.png')} />
                            <View style={styles.grType}>
                                <Text style={styles.type}>KHỚP</Text>
                                <Text style={styles.actionType}>THOÁI HÓA</Text>
                            </View>
                        </View>
                    </View>
                    {noCount === 0 ?
                        <>
                            <Text style={styles.exerciseDescriptionInfo}>
                                Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.
                            </Text>
                            {isMobile &&
                                <>
                                    <Image
                                        source={imageUrls ? { uri: imageUrls[8] } : undefined}
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
                                </>
                            }
                            {seeMore == false ? (
                                <>
                                    <Text style={styles.exerciseDes}>
                                        Cùng Anlene giúp bạn chăm sóc sức khoẻ
                                        Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn
                                        đang chờ bạn!
                                    </Text>

                                    <Text style={[styles.xemThem, { color: '#ECD24A' }]} onPress={() => setSeeMore(true)}>
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
                        </>
                        :
                        noCount === 1 ?
                            <>
                                <Text style={isMobile ? styles.exerciseDescriptionInfo : stylesTablet.exerciseDescriptionInfo}>
                                    Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn.
                                </Text>
                                {isMobile &&
                                    <>
                                        <Image
                                            source={imageUrls ? { uri: imageUrls[9] } : undefined}
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
                                                    <Stop offset="0%" stopColor="#376E48" stopOpacity="1" />
                                                    <Stop offset="100%" stopColor="#187B33" stopOpacity="1" />
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
                                    </>
                                }
                                {seeMore == false ? (
                                    <>
                                        <Text style={styles.exerciseDes}>
                                            Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                        </Text>

                                        <Text style={[styles.xemThem, { color: '#376E48' }]} onPress={() => setSeeMore(true)}>
                                            Xem thêm
                                        </Text>
                                    </>)
                                    :


                                    (
                                        <>
                                            <Text style={styles.exerciseDes}>
                                                Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                            </Text>
                                            <Text style={styles.infoSeeMore}>
                                                *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                                Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                                            </Text>
                                        </>
                                    )
                                }
                            </>
                            :
                            <>
                                <Text style={styles.exerciseDescriptionInfo}>
                                    Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.
                                </Text>
                                {isMobile &&
                                    <>
                                        <Image
                                            source={imageUrls ? { uri: imageUrls[8] } : undefined}
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
                                    </>
                                }
                                {seeMore == false ? (
                                    <>
                                        <Text style={styles.exerciseDes}>
                                            Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                        </Text>

                                        <Text style={[styles.xemThem, { color: '#ECD24A' }]} onPress={() => setSeeMore(true)}>
                                            Xem thêm
                                        </Text>
                                    </>)
                                    :


                                    (
                                        <>
                                            <Text style={styles.exerciseDes}>
                                                Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                            </Text>
                                            <Text style={styles.infoSeeMore}>
                                                *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                                Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                                            </Text>
                                        </>
                                    )
                                }
                            </>
                    }

                    <BtnSubmit title={noCount > 1 ? 'NHẬN NGAY' : 'MUA NGAY'} width={160} height={44} radius={24} color='#B70002' border='#FFC200' onPress={() => nextPage()} />

                </LinearGradient>
                :
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
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/icon-back.png')} />
                        </TouchableOpacity>
                        <TextTitle title='Trang 4/6' />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => reloadApp()}>
                            <Image source={require('../assets/icon-home.png')} />
                        </TouchableOpacity>
                    </View>

                    <Image style={isMobile ? styles.textLogo : stylesTablet.textLogo} source={require('../assets/text-logo.png')} />


                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
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
                                            x="13%"
                                            y="58"
                                            textAnchor="middle"
                                        >
                                            XIN CHÚC MỪNG
                                        </SvgText>
                                    </Svg>
                                    <Text style={stylesTablet.exerciseDescription}>
                                        Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
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
                                                x="15%"
                                                y="58"
                                                textAnchor="middle"
                                            >
                                                LƯU Ý MỘT CHÚT!
                                            </SvgText>
                                        </Svg>
                                        <Text style={stylesTablet.exerciseDescription}>
                                            Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm:
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
                                                x="11%"
                                                y="58"
                                                textAnchor="middle"
                                            >
                                                HÃY CẨN THẬN!
                                            </SvgText>
                                        </Svg>
                                        <Text style={stylesTablet.exerciseDescription}>
                                            Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé,
                                            bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp
                                            suy giảm:
                                        </Text>
                                    </>



                            }

                            <View style={stylesTablet.groupContainer}>
                                <View style={stylesTablet.typeContainer}>
                                    <Image style={stylesTablet.img} source={require('../assets/co-big.png')} />
                                    <Image style={stylesTablet.imagePhanTram} source={require('../assets/29%-big.png')} />
                                    <View style={stylesTablet.grType}>
                                        <Text style={stylesTablet.type}>KHỐI CƠ</Text>
                                        <Text style={stylesTablet.actionType}>MẤT ĐI</Text>
                                    </View>
                                </View>

                                <View style={stylesTablet.typeContainer}>
                                    <Image style={stylesTablet.img} source={require('../assets/xuong-big.png')} />
                                    <Image style={stylesTablet.imagePhanTram} source={require('../assets/20%-big.png')} />
                                    <View style={stylesTablet.grType}>
                                        <Text style={stylesTablet.type}>MẬT ĐỘ XƯƠNG</Text>
                                        <Text style={stylesTablet.actionType}>SUY GIẢM</Text>
                                    </View>
                                </View>

                                <View style={stylesTablet.typeContainer}>
                                    <Image style={stylesTablet.img} source={require('../assets/khop-big.png')} />
                                    <View style={stylesTablet.grType}>
                                        <Text style={stylesTablet.type}>KHỚP</Text>
                                        <Text style={stylesTablet.actionType}>THOÁI HÓA</Text>
                                    </View>
                                </View>
                            </View>
                            {noCount === 0 ?
                                <>
                                    <Text style={stylesTablet.exerciseDescriptionInfo}>
                                        Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.
                                    </Text>
                                    {isMobile &&
                                        <>
                                            <Image
                                                source={imageUrls ? { uri: imageUrls[8] } : undefined}
                                                style={{ width: 282, height: 211 }}
                                            />

                                            <View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={stylesTablet.textNote}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                                                    <Text style={stylesTablet.textNote}>**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones</Text>
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
                                        </>
                                    }

                                    <>
                                        <Text style={stylesTablet.exerciseDes}>
                                            Cùng Anlene giúp bạn chăm sóc sức khoẻ
                                            Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn
                                            đang chờ bạn!
                                        </Text>
                                        <Text style={stylesTablet.infoSeeMore}>
                                            *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                            Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                                        </Text>
                                    </>
                                </>
                                :
                                noCount === 1 ?
                                    <>
                                        <Text style={isMobile ? styles.exerciseDescriptionInfo : stylesTablet.exerciseDescriptionInfo}>
                                            Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn.
                                        </Text>
                                        {isMobile &&
                                            <>
                                                <Image
                                                    source={imageUrls ? { uri: imageUrls[9] } : undefined}
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

                                                            <Stop offset="0%" stopColor="#376E48" stopOpacity="1" />
                                                            <Stop offset="100%" stopColor="#187B33" stopOpacity="1" />
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
                                            </>
                                        }
                                        <>
                                            <Text style={stylesTablet.exerciseDes}>
                                                Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                            </Text>
                                            <Text style={stylesTablet.infoSeeMore}>
                                                *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                                Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                                            </Text>
                                        </>
                                    </>
                                    :
                                    <>
                                        <Text style={stylesTablet.exerciseDescriptionInfo}>
                                            Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.
                                        </Text>
                                        {isMobile &&
                                            <>
                                                <Image
                                                    source={imageUrls ? { uri: imageUrls[8] } : undefined}
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
                                            </>
                                        }

                                        <>
                                            <Text style={stylesTablet.exerciseDes}>
                                                Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!
                                            </Text>
                                            <Text style={stylesTablet.infoSeeMore}>
                                                *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                                                Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                                            </Text>
                                        </>
                                    </>
                            }

                            <BtnSubmit title={noCount > 1 ? 'NHẬN NGAY' : 'MUA NGAY'} width={181} height={50} radius={24} color='#B70002' border='#FFC200' onPress={() => nextPage()} />
                            <View style={{ height: 30 }} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {noCount === 1 ?
                                <Image
                                    source={require('../assets/hop-sua-big1.png')}
                                />
                                :
                                <Image
                                    source={require('../assets/hop-sua-big.png')}
                                />
                            }

                            <View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={stylesTablet.textNote}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                                    <Text style={stylesTablet.textNote}>**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones</Text>
                                </View>
                            </View>

                            <Svg height="30" width="449" viewBox="0 0 319 84">
                                <Defs>

                                    {noCount === 1 ?
                                        <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <Stop offset="0%" stopColor="#376E48" stopOpacity="1" />
                                            <Stop offset="100%" stopColor="#187B33" stopOpacity="1" />
                                        </SvgLinearGradient>
                                        :
                                        <SvgLinearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <Stop offset="10%" stopColor="#FFC200" stopOpacity="11" />
                                            <Stop offset="95%" stopColor="#E1D770" stopOpacity="1" />
                                            <Stop offset="100%" stopColor="#FFC200" stopOpacity="0.6" />
                                        </SvgLinearGradient>
                                    }

                                </Defs>
                                <SvgText
                                    fill="url(#gradientText)"
                                    fontSize="50"
                                    fontWeight="700"
                                    x="12%"
                                    y="58"
                                    textAnchor="middle"
                                >
                                    LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                                </SvgText>
                            </Svg>
                        </View>
                    </View>

                </LinearGradient>
            }
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
        top: '4%',
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
    },
    exerciseDescriptionInfo: {
        width: '80%',
        fontSize: 12,
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
        width: 250,
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
    imagePhanTram: {
        position: 'absolute',
        right: 30,
        bottom: 50,
    },
    grType: {
        borderColor: '#FFF',
        borderWidth: 1.5,
        borderRadius: 8,
        height: 42,
        width: 110,
        backgroundColor: '#376E48',
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

const stylesTablet = StyleSheet.create({
    textLogo: {
        height: 31,
        width: 116.85,
        marginBottom: '3%',
        marginTop: '3%',
    },
    exerciseDescriptionInfo: {
        width: 527,
        fontSize: 14,
        lineHeight: 18.83,
        fontWeight: '500',
        color: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
    },
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
        top: '4%',
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
        marginTop: '1%',
        marginBottom: '1%',
        width: '100%',
        fontSize: 16,
        lineHeight: 21.52,
        bottom: 5,
        fontWeight: '500',
        color: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
    },
    img: {
        marginRight: '5%',
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
        fontSize: 8.38,
        fontWeight: '400',
        lineHeight: 10.89,
        width: 278,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#FFF',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        bottom: '7%',
        left: '5%',
    },
    imagePhanTram: {
        position: 'absolute',
        right: 42,
        bottom: 86,
    },
    grType: {
        marginTop: '8%',
        borderColor: '#FFF',
        borderWidth: 1.5,
        borderRadius: 8,
        height: 62,
        width: 158,
        backgroundColor: '#376E48',
        justifyContent: 'center',
    },
    type: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 22.24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    actionType: {
        color: '#ECD24A',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 18.83,
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
        fontSize: 14,
        width: 527,
        lineHeight: 18.83,
        fontWeight: '500',
        marginTop: '2%',
    },
    infoSeeMore: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 16.9,
        fontStyle: 'italic',
        color: '#FFF',
        paddingTop: '2%',
        width: 502,
        paddingBottom: '10%',
    },
});


export default ProInfo;