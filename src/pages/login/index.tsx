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
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      if (!email || !password) {
        return Alert.alert("Atenção", "Preencha todos os campos");
      }
      setLoading(true);
      setTimeout(() => {
        if (email === "teste@teste.com" && password === "123456") {
          Alert.alert("logado com sucesso");
          setLoading(false);
        } else {
          Alert.alert("Erro", "Email ou senha inválida!");
        }
      }, 3000);
    } catch (error) {
      console.log("Erro do getLogin => ", error);
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
