import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#123472',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
    color: '#fff',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  dots: {
    flexDirection: 'row-reverse',
    display: 'flex',
  },
  subContainer: {
    backgroundColor: '#355287',
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  name: {
    fontSize: 17,
    color: '#ffffff',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    fontSize: 12,
    color: '#4AB5E3',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  accountNo: {
    fontSize: 12,
    color: '#7D90B2',
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 16,
  },
  payouts: {
    color: '#08101F',
    fontWeight: '500',
    fontSize: 16,
  },
  showaAll: {
    fontSize: 13,
    color: '#798293',
  },
  headContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#355287',
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
export default styles;
