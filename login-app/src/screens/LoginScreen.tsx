import{Text,View,Pressable,TextInput,StyleSheet} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import api from "../services/api";
import axios from 'axios';

export default function LoginScreen(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
const navigation = useNavigation<any>();

const handleLogin = async () => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    console.log('Success:', response.data);
    navigation.navigate('Dashboard');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Status:', error.response?.status);
      console.log('Data:', error.response?.data);
      console.log('Message:', error.message);
    } else {
      console.log(error);
    }
  }
};

    return(
      <View style={styles.container}>
        <View style={styles.log}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <TextInput placeholder="Enter email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}/>
<View style={styles.passwordContainer}>
  <TextInput
    placeholder="Enter password"
    style={styles.passwordInput}
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
  />

  <Pressable
    onPress={() => setShowPassword(!showPassword)}
    style={styles.eyeButton}
  >
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color="gray"
    />
  </Pressable>
</View>
           

        <Pressable style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>

    
  </View>
  </View>
    )
}





const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    padding: 20,
    backgroundColor: "#8f4747",
   
  },
  log:{
   width:250,
    padding:10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#2563eb",
    padding:10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 10,
  backgroundColor: "#fff",
  paddingHorizontal: 10,
  marginBottom: 15,
},

passwordInput: {
  flex: 1,
  paddingVertical: 12,
  borderWidth:0,
},
eyeButton: {
  padding: 12,
},
});