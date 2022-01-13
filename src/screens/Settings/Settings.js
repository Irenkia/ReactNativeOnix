import React, {useContext} from 'react';
import {View, Text, SectionList} from 'react-native';
import {styles} from './styles';
import {SECTION_LIST_CARS} from '../../constants/constants';
import {ThemeContext} from '../../providers/ThemeProvider';

export const Settings = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={{marginVertical: 20}}>
        <Text style={[styles.title, {color: colors.text}]}>My SectionList</Text>
      </View>

      <SectionList
        sections={SECTION_LIST_CARS}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={[styles.title, {color: colors.text}]}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={[styles.header, {color: colors.text}]}>{title}</Text>
        )}
      />
    </View>
  );
};
