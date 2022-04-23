import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  text2: {
    color: '#08101F',
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  text3: {
    color: '#4AB5E3',
    fontSize: 12,
    fontWeight: '500',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text4: {
    color: '#798293',
    fontSize: 12,
    fontWeight: '500',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: 160,
    height: 40,
    justifyContent: 'space-around',
    borderRadius: 100,
    marginHorizontal: 3,
    backgroundColor: 'red',
  },
  buttontext: {
    fontSize: 13,
    textAlign: 'center',
  },
  view: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 20,
    backgroundColor: '#F2F3F5',
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: '#F2F3F5',
  },
});
export default styles;
