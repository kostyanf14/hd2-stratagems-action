import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#9f9f9f',
        elevation: 2,
    },
    selected: {
        borderColor: '#f0f000',
        borderWidth: 4,
        borderStyle: 'dashed',
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 64,
        width: 64,
    },
});

const StratagemListRow = ({ title, description, ImageTag, onPress, onLongPress, isSelected }) => (
    <TouchableOpacity
    style={[styles.container, isSelected ? styles.selected : null]}
    onPress={onPress}
    onLongPress={onLongPress}>
        <ImageTag style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>

    </TouchableOpacity>
);

export default StratagemListRow;
