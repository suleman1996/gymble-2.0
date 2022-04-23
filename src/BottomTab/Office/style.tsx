import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: '#123472',
  },
  arrowicon: {
    height: 24,
    width: 24,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  text2: {
    color: '#4AB5E3',
    fontSize: 15,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  mainview: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    width: 100,
    height: 32,
    justifyContent: 'center',
    borderRadius: 32,
  },
  buttontext: {
    fontSize: 13,
    textAlign: 'center',
  },
  buttonview: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
    backgroundColor: '#F2F3F5',
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: '#F2F3F5',
  },
  forward: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  searchicon: {
    height: 24,
    width: 24,
  },
});
export default styles;
