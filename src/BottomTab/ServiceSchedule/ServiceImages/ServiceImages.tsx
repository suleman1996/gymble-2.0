import React, { useState ,useEffect} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,

} from 'react-native';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import {
    ProfileBackIcon,
    ProfileDotsIcon,
} from '../../../Svgs/Profile/ProfileVectors';
import {
    ImageLaoutIcon,
    UploadIcon
} from './SVG/Icon'
import {
    CrossIcon,
    NotactiveIcon,
    ActiveIcon,
  } from '../../Home/Svgs/Icons';
import Button from '../../../Components/Button/button';
import PickerButton from '../../../Components/Button/pickerButton'



const ServiceImages: React.FC<any> = ({ navigation }) => {
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [selecter, setSelecter] = useState(1);
    const [btncolor, setBtncolor] = useState(true)
    const [visible, setVisible] = useState(false);

    const takePhotoFromCamera = () => {
        setVisible(false)

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,

        }).then(image => {
            if (selecter === 1) {
                setImage1(image.path)
                setSelecter(2)

            } else if (selecter === 2) {
                setImage2(image.path)
                setSelecter(3)

            }
            else if (selecter === 3) {
                setImage3(image.path)
                setSelecter(1)
                setBtncolor(false)


            }

        })
    }

    const takePhotoFromGallery = () => {
          setVisible(false)
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
              }).then(image => {
                if(selecter===1){
                  setImage1(image.path)
                  setSelecter(2)

                }else if(selecter===2){
                  setImage2(image.path)
                  setSelecter(3)

                }
                 else if(selecter===3){
                  setImage3(image.path)
                  setSelecter(1)
                  setBtncolor(false)


                 }});  
    }

    useEffect(() => {
        
    })

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <ProfileBackIcon
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.text}>Service Images</Text>
                <ProfileDotsIcon style={styles.dotsIcon} />
            </View>
            <ScrollView>

                <View style={{ backgroundColor: '#FFF' }}>

                    <TouchableOpacity onPress={() => setVisible(true)} >
                        <View style={styles.uploadimageView} >
                            {/* {/ <Image source={require('./upload.png')} style={{height:40,width:40,alignSelf:'center'}} /> /} */}
                            <UploadIcon style={styles.dotsIcon} />
                            <Text style={{ color: 'grey' }}> Upload your images</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.main3View}>
                    <View style={styles.ImageBox}>
                        {image1===''? <ImageLaoutIcon style={styles.dotsIcon} />:<><Image source={{uri:image1}} style={styles.images}/></>}
                       
                    </View>
                    <View style={styles.ImageBox}>
                    {image2===''? <ImageLaoutIcon style={styles.dotsIcon} />:<><Image source={{uri:image2}} style={styles.images}/></>}
                    </View>
                    <View style={styles.ImageBox}>
                    {image3===''? <ImageLaoutIcon style={styles.dotsIcon} />:<><Image source={{uri:image3}} style={styles.images}/></>}
                    </View>
                </View>
                <View style={styles.policyTextView}>
                    <Text style={styles.policyText}>
                        {'\u2022'}  Minimum three images required. {'\n'}
                        {'\u2022'}  Pay attention to quality of the image uploaded {'\n'}
                        {'\u2022'}  Hosts with higher quality images have more
                        {'\n'}    atractions
                    </Text>
                </View>

                <Modal isVisible={visible}>
                    <View style={styles.ModalView}>
                        <TouchableOpacity onPress={()=>setVisible(false)} style={styles.modalIcon}>
                    <CrossIcon style={styles.modalIcon}/>
                            
                        </TouchableOpacity>

                        <Text style={{  }}> Click your desired Button </Text>
                        <View style={styles.ModalBtnView}>
                        <PickerButton
                    text={'Open camera'}
                    color={'#9BA2AE'}
                    fontSize={15}
                    height={45}
                    width={'40%'}
                    marginTop={50}
                    backgroundColor='#fff'
                    borderWidth={1}
                    borderColor='#9BA2AE'
                    marginBottom={10}
                    onPress={takePhotoFromCamera}
                />
                           
                        <PickerButton
                    text={'Open Gallery'}
                    color={'#9BA2AE'}
                    fontSize={15}
                    height={45}
                    width={'40%'}
                    marginTop={50}
                    backgroundColor='#fff'
                    borderWidth={1}
                    borderColor='#9BA2AE'
                    marginBottom={10}
                    onPress={takePhotoFromGallery}
                />
                        </View>
                    </View>
           </Modal>
            </ScrollView>
            <View style={styles.endBtn}>

                <PickerButton
                    text={'Setup Later'}
                    color={'#9BA2AE'}
                    fontSize={15}
                    height={45}
                    width={'40%'}
                    marginTop={50}
                    backgroundColor='#fff'
                    borderWidth={1}
                    borderColor='#9BA2AE'
                    marginBottom={10}
                    onPress={()=>navigation.navigate('serviceWorkout')}
                />
                <PickerButton
                    text={'Continue'}
                    color={'#fff'}
                    fontSize={15}
                    height={45}
                    width={'40%'}
                    marginTop={50}
                    backgroundColor={btncolor===true?'#9BA2AE':"#4AB5E3"}
                    marginBottom={10}
                    disabled={btncolor===true?true:false}
                    onPress={() => { }}
                />
            </View>

        </SafeAreaView>
    )
}


export default ServiceImages;