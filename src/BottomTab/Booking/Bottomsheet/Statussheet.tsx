import React, { useState,useRef } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import { CrossIcon,NotactiveIcon, ActiveIcon} from '../../../BottomTab/Home/Svgs/Icons';

const Statussheet: React.FC<any> = ({ onPress, data,setStatus,closeStatus}) => {
    const [active, setActive] = useState(0);
   
    const onHandling = (index:number,item:any) => {
        if(typeof index){
            setActive(index)
            setStatus(item.text)
            closeStatus('')
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity onPress={() => onHandling(index,item)} style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', marginHorizontal: 20, }}>
                     {index == active ?
                        <ActiveIcon style={{ height: 20, width: 20, }} />
                        :
                        <NotactiveIcon style={{ height: 20, width: 20, }} />
                    }
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#08101F', marginHorizontal: 20 }}>{item.text}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ borderWidth: 1, borderColor: '#F2F3F5', marginTop: 15, marginHorizontal: 15 }}></View>
            </>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                <CrossIcon style={{ height: 20, width: 15, }} onPress={onPress} />
                <Text style={{ fontSize: 15, color: '#0A1326' }}>Status</Text>
                <Text style={{ fontSize: 15, color: '#0A1326' }}></Text>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
export default Statussheet;
