import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface BtnSubmitProps {
    title: string;
    onPress: () => void;
    height?: number;
    width?: number;
    radius?: number;
    color?: string;
    border?: string;
    shadowColor?: string; // Màu bóng đổ
    shadowOffset?: { width: number; height: number }; // Kích thước bóng đổ
    shadowOpacity?: number; // Độ mờ bóng đổ
    shadowRadius?: number; // Độ mờ bóng đổ
    elevation?: number; // Độ cao bóng đổ cho Android
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({
    title,
    onPress,
    height = 50,
    width = 200,
    radius = 5,
    color = '#007BFF',
    border = 'transparent',
    shadowColor = '#000',
    shadowOffset = { width: 0, height: 4 },
    shadowOpacity = 0.25,
    shadowRadius = 3.5,
    elevation = 8,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    height,
                    width,
                    borderRadius: radius,
                    backgroundColor: color,
                    borderColor: border,
                    borderWidth: border ? 1.5 : 0,
                    shadowColor,
                    shadowOffset,
                    shadowOpacity,
                    shadowRadius,
                    elevation,
                },
            ]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: '#FFC200',
        bottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default BtnSubmit;