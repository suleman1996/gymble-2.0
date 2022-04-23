import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
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
  taxDetail: {
    color: '#08101F',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 14,
  },
  tinNumber: {
    color: '#08101F',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 14,
  },
  forminputView: {
    height: 50,
    borderColor: '#F2F3F5',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  userIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    flex: 1,
  },
  bankAcoount: {
    color: '#08101F',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 14,
  },
  acoountHolder: {
    color: '#08101F',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 14,
    marginVertical: 10,
  },
  accountNumber: {
    color: '#08101F',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 14,
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    fontSize: 15,
    color: 'black',
  },
});
export default styles;
