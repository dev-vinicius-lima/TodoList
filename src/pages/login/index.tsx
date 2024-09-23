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
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      if (!email || !password) {
        return Alert.alert("Atenção", "Preencha todos os campos");
      }
      setLoading(true);
      setTimeout(() => {
        if (email === "adm@adm.com" && password === "123456") {
          Alert.alert("logado com sucesso");
          setLoading(false);
        } else {
          Alert.alert("Erro", "Email ou senha inválida!");
        }
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>EMAIL:</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <Text>
            <MaterialIcons
              name="mail-outline"
              size={24}
              color={themes.colors.gray}
            />
          </Text>
        </View>
        <Text style={style.titleInput}>SENHA:</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <Text>
            <MaterialIcons
              name="remove-red-eye"
              size={24}
              color={themes.colors.gray}
            />
          </Text>
        </View>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <Text style={style.textButton}>Carregando...</Text>
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textRegister}>
        Não uma tem conta?
        <Text style={{ color: themes.colors.primary }}> Criar conta</Text>
      </Text>
    </View>
  );
}
