import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 155,
    height: 125,
    marginRight: 10,
    resizeMode: 'stretch',
  },
  wrapper: {
    margin: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  example: {
    fontSize: 15,
    padding: 15,
  },
  text: {
    fontSize: 15,
    padding: 10,
  },
  toggleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  item: {
    //flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 8,
    fontSize: 21,
    fontWeight: 'bold',
    borderWidth: 0.5,
    marginTop: 'auto',
    width: 'auto',
    alignItems: 'center',
    backgroundColor: '#F4C2C2',
    // backgroundColor: 'skyblue',
  },
  basket: {
    //flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 8,
    borderWidth: 0.5,
    marginTop: 12,
    //width: '50%',
    alignItems: 'center',
    backgroundColor: '#F4C2C2',
    // backgroundColor: 'skyblue',
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  switch: {
    padding: 0.5,
    marginVertical: 5,
    fontSize: 17,
    textAlign: 'right',
  },
});
