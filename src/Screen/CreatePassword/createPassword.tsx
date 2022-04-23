import React, { useState } from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import ArrowIcon from '../../Svgs/Reset/arrowSvg';
import { FormInput } from '../../utilis/Text_input';
import EyeIcon from '../../Svgs/Login/EyeSvg';
import { LockIcon, LockHighlightIcon } from '../../Svgs/Login/IconSvg';
import HideEyeIcon from '../../Svgs/createPassword/hideEyeSvg';
import Button from '../../Components/Button/button';
import { Greytickicon } from '../../Svgs/createPassword/tickIconSvg';
import styles from './style';

const CreatePassword: React.FC<any> = ({ navigation }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [confirmpasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [Pfocus, setPFocus] = useState(false);
    const [cpfocus, setcpFocus] = useState(false);

    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.view}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('resetPassword')}><ArrowIcon style={styles.arrowicon} /></TouchableOpacity>
                    <Text style={styles.topText}>Create new password</Text>
                    <Text style={styles.text}>Your new password must be different from previous passwords.</Text>

                    <Text style={styles.text2}>New password</Text>
                    <View style={[styles.forminputView, { borderColor: Pfocus ? '#000' : '#F2F3F5' }]}>
                        {!Pfocus ? <LockIcon style={styles.userIcon} /> : <LockHighlightIcon style={styles.userIcon} />}
                        <FormInput
                            placeholder={"Enter password"}
                            placeholderTextColor="#798293"
                            secureTextEntry={passwordVisibility}
                            onChangeText={(text) => { setPFocus(text) }}
                            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', }}
                        />
                        {passwordVisibility ? <EyeIcon style={styles.eyeIcon} onPress={() => setPasswordVisibility(!passwordVisibility)} />
                            : <HideEyeIcon style={styles.eyeIcon} onPress={() => setPasswordVisibility(!passwordVisibility)} />}
                    </View>

                    <Text style={styles.text2}>Confirm password</Text>
                    <View style={[styles.forminputView, { borderColor: cpfocus ? '#000' : '#F2F3F5' }]}>
                        {!cpfocus ? <LockIcon style={styles.userIcon} /> : <LockHighlightIcon style={styles.userIcon} />}
                        <FormInput
                            placeholder={"Enter confirm password"}
                            placeholderTextColor="#798293"
                            secureTextEntry={confirmpasswordVisibility}
                            onChangeText={(text) => { setcpFocus(text) }}
                            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', }}
                        />
                        {confirmpasswordVisibility ? <EyeIcon style={styles.eyeIcon} onPress={() => setConfirmPasswordVisibility(!confirmpasswordVisibility)} />
                            : <HideEyeIcon style={styles.eyeIcon} onPress={() => setConfirmPasswordVisibility(!confirmpasswordVisibility)} />}
                    </View>

                    <Text style={styles.text3}>Your password must have:</Text>

                    <View style={styles.tickView}>
                        <Greytickicon style={styles.tickIcon} tintColor={"red"}/>
                        <Text style={[styles.text4, {color:"red"}]}>8 to 20 characters</Text>
                    </View>
                    <View style={styles.tickView}>
                        <Greytickicon style={styles.tickIcon} tintColor={"green"} />
                        <Text style={[styles.text4, {color:"green"}]}>Letters, numbers, and one (1) special character.</Text>
                    </View>

                    <Button onPress={()=> navigation.navigate('congrats')} text={'Reset Password'} color={Pfocus && cpfocus ? '#fff' : '#4AB5E3'} backgroundColor={Pfocus && cpfocus ? '#4AB5E3' : null} fontSize={15} height={50} width={'100%'} borderWidth={1} marginTop={50} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default CreatePassword