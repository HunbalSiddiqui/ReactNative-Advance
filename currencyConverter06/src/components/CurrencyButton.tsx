import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native/types';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

function CurrencyButton(props: CurrencyButtonProps): JSX.Element {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>
                {props.flag}
            </Text>
            <Text style={styles.country}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    }
})

export default CurrencyButton