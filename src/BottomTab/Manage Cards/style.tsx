import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 10,
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
  card: {
    borderWidth: 1,
    height: 180,
    borderColor: '#FFF',
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  cardNumber: {
    alignSelf: 'center',
    marginVertical: 15,
    justifyContent: 'center',
  },
  number: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  cardHolder: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
  },
  cardHolderName: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
