import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert("Atenção", "Preencha todos os campos");
      }
      navigation.navigate("BottomRoutes");
    } catch (error) {
      console.log("Erro do getLogin => ", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          titleInput="EMAIL:"
          IconRight={MaterialIcons as any}
          iconRightName="mail-outline"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          titleInput="SENHA:"
          IconRight={Octicons as any}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={style.boxBottom}>
        <Button title="Entrar" onPress={() => getLogin()} loading={loading} />
      </View>
      <Text style={style.textRegister}>
        Não uma tem conta?
        <Text style={{ color: themes.colors.primary }}> Criar conta</Text>
      </Text>
    </View>
  );
}
