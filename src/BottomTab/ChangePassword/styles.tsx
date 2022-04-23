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
  userIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    flex: 1,
  },
  text3: {
    color: '#08101F',
    fontSize: 14,
    marginTop: 25,
    marginHorizontal: 15,
    fontWeight: '400',
  },
  forminputView2: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    marginHorizontal: 10,
    borderColor: '#F2F3F5',
    overflow: 'hidden'
  },
  view1: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view2: {
    height: 50,
    borderRadius: 10,
    fontSize: 15,
    color: 'black',
  },
});
export default styles;
