import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface BtnSubmitProps {
    title: string;
    textColor?: string;
    onPress: () => void;
    disable?: boolean;
    height?: number;
    width?: number;
    radius?: number;
    color?: string;
    border?: string;
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({
    title,
    textColor = '#FFF',
    onPress,
    disable = false,
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
            disabled={disable}
            onPress={disable ? undefined : onPress}
        >
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
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