import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
// test
export const SwipeableNames = ({ names }) => {
    return (
        <Swiper
            style={styles.wrapper}
            loop
            showsPagination={false}
            autoplay={false}
            showsButtons={false}
        >
            {names.map((name, index) => (
                <View key={index} style={styles.slide}>
                    <Text style={styles.arabicName}>{name.arabicName}</Text>
                    <Text style={styles.nameText}>{name.name}</Text>
                    <Text style={styles.meaningText}>{name.meaning}</Text>
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    arabicName: {
        fontSize: 48,
        textAlign: 'center',
        marginBottom: 20,
    },
    nameText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    meaningText: {
        fontSize: 18,
        textAlign: 'center',
    },
});
