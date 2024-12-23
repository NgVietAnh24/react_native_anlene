import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextTitleProps {
    title: string
    paddingLeft?: number,
}

const TextTitle: React.FC<TextTitleProps> = ({
    title,
    paddingLeft = 0,
}) => {
    return (
        <Text style={[styles.text, { paddingLeft }]}>
            &lt; {title} &gt;
        </Text>
    );

}
export default TextTitle;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600',
    },
});
