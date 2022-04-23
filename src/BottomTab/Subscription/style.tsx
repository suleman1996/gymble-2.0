import {StyleSheet} from 'react-native';
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
  card: {
    borderWidth: 1,
    height: 150,
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    borderColor: '#F2F3F5',
  },
  cardContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#798293',
    textAlign: 'center',
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: '400',
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  cardNumber: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  number: {
    color: '#08101F',
    fontSize: 17,
    fontWeight: '600',
  },
  cardHolder: {
    color: '#4AB5E3',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
  },
  cardHolderName: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#08101F',
  },
  detailContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  expDate: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  date: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default styles;
