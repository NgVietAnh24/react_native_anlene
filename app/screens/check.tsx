import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextTitle from '../components/Text/textTitle';
import { LinearGradient } from 'expo-linear-gradient';

const ExerciseScreen: React.FC = () => {
    return (
        <LinearGradient style={styles.container} colors={['#e0f7fa', '#80deea']}>
            <View style={styles.header}>
                <TextTitle title='Trang 2/6' />
                <Text style={styles.headerTitle}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>
                <TouchableOpacity style={styles.homeButton} activeOpacity={0.7}>
                    <Text style={styles.homeButtonText}>{'🏠'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                {[1, 2, 3, 4].map((item, index) => (
                    <React.Fragment key={item}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressCircleText}>{item}</Text>
                        </View>
                        {index < 3 && <View style={styles.progressLine} />}
                    </React.Fragment>
                ))}
            </View>
            <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>Cơ</Text>
                <Text style={styles.progressLabel}>Xương</Text>
                <Text style={styles.progressLabel}>Khớp</Text>
                <Text style={styles.progressLabel}>Để kháng</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>KIỂM TRA CƠ</Text>
            </View>
            <View style={styles.exerciseContainer}>
                <Image source={require('../assets/bai1.png')} style={styles.exerciseImage} />
            </View>
            <View style={styles.exerciseDescriptionContainer}>
                <Text style={styles.exerciseDescription}>
                    Đây là mô tả về bài tập kiểm tra cơ. Bạn có thể thực hiện các động tác này để đánh giá tình trạng cơ của mình.
                </Text>
            </View>
            <TouchableOpacity style={styles.startButton} activeOpacity={0.7}>
                <Text style={styles.startButtonText}>Bắt đầu</Text>
            </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    homeButton: {
        padding: 10,
    },
    homeButtonText: {
        fontSize: 24,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    progressCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressCircleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    progressLine: {
        height: 2,
        flex: 1,
        backgroundColor: '#007BFF',
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    progressLabel: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    exerciseContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    exerciseImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    exerciseDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
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
});

export default ExerciseScreen;