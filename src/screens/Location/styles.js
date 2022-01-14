import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  marker: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#007bff',
    borderColor: '#eee',
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    color: '#fff',
  },
});
