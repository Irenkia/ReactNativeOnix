import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    flex: 1,
    paddingHorizontal: 16,
  },
  viewBottom: {flex: 1, marginTop: 8},
  textTop: {
    fontSize: 22,
  },
  textBottom: {
    fontSize: 21,
  },
  textButton: {
    fontSize: 17,
  },
  deleteCarStyle: {
    marginTop: 'auto',
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  img: {
    width: 155,
    height: 125,
    marginRight: 10,
    resizeMode: 'stretch',
  },
  counterCars: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
  },
  counterText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  wrapper: {
    flexDirection: 'row',
  },
  nameCar: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  positionContent: {
    marginTop: 15,
  },
});
