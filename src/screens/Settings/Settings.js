import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {styles} from './styles';
import {SECTION_LIST_CARS} from '../../constants/constants';
import {useSelector} from 'react-redux';

export const Settings = () => {
  const {theme} = useSelector(state => state.ReducerTheme);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{marginVertical: 20}}>
        <Text style={[styles.title, {color: theme.colors.text}]}>
          My SectionList
        </Text>
      </View>

      <SectionList
        sections={SECTION_LIST_CARS}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={[styles.title, {color: theme.colors.text}]}>
              {item}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => {
          return (
            <Text style={[styles.header, {color: theme.colors.text}]}>
              {title}
            </Text>
          );
        }}
      />
    </View>
  );
};
