import React from 'react';
import { SafeAreaView , ScrollView} from "react-native";

const Layout = ({children,scroll}) => {
  if(scroll){
    return(
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <ScrollView>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
  }
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
      {children}
    </SafeAreaView>
  )
}

export default Layout;
