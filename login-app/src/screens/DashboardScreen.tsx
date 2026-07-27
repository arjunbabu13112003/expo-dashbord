import {View,Text,StyleSheet} from "react-native";
 import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function DashboardScreen(){
const navigation = useNavigation <any>();

    return(

        <View style={styles.container}>
                <Text style={styles.title}>Dashboard</Text>
                <Text>Welcome Arjun</Text>

                <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
                >
                <Text style={styles.buttonText}>Logout</Text>
                </Pressable>

        </View> 
    )
    
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
        marginBottom:10,
    },
    button: {
  marginTop: 30,
  backgroundColor: "#2563eb",
  padding: 15,
  borderRadius: 10,
},

buttonText: {
  color: "#fff",
  fontWeight: "bold",
},

})