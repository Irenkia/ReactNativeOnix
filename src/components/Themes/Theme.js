import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Theme = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const getTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem('theme');
            return theme;
        } catch (error) {
            //console.log('error'.error);
        }
    };

    const stylesTheme = StyleSheet.create({
        container: {
            flex: .1,
            backgroundColor: `${isEnabled ? '#8DA399' : '#FDF5E6'}`,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const setTheme = async () => {
        try {
            await AsyncStorage.setItem('theme', 'dark');
        } catch (error) {
            //console.log('error', error);
        }
    };

    useEffect(() => {
        getTheme()
            .then(res => {
                setIsEnabled(res === 'light');
            })
            .catch(err => {
                console.log('error', err);
            });
    }, []);

    const onChangeHandler = (value) => {
        if (value) {
            setIsEnabled(true);
            setTheme('light');
        } else {
            setIsEnabled(false);
            setTheme('dark');
        }
    };

    return (
        <View style={stylesTheme.container}>
            <Switch
                //trackColor={{ false: "# 757677", true: "# 81b0ff" }}
                thumbColor={isEnabled ? '#8DA399' : '#FDF5E6'}
                onValueChange={onChangeHandler}
                value={isEnabled}
            />
        </View>
    );
};

export default Theme;