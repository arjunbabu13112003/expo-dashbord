import{Text,View,Pressable,TextInput,StyleSheet} from "react-native";

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <TextInput placeholder="Enter email"
              style={styles.input}/>

            <TextInput placeholder="Enter password"
            style={styles.input}
            secureTextEntry />

        <Pressable style={styles.button}
            onPress={()=>alert("Button Clicked")}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        </View>
    )
}





const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#8f4747",
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
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});