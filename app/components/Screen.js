import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

import colors from "../config/colors";

function Screen({ children, backgroundColor }) {
    return(
        <SafeAreaView style={[styles.screen, {backgroundColor:colors[backgroundColor]}]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;
