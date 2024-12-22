import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextTitleProps {
    title: string
}

const TextTitle: React.FC<TextTitleProps> = ({
    title
}) => {
    return (
        <Text style={styles.text}>
            &lt; {title} &gt;
        </Text>
    );

}
export default TextTitle;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        paddingLeft: 60,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600',
    },
});
