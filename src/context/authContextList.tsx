import React, { useContext } from "react";
import { Alert } from "react-native";

export const AuthContextList = React.createContext({});

export const AuthProviderList = (props: any) => {
  const onOpen = () => {
    Alert.alert("Atenção", "Funcionalidade ainda em desenvolvimento");
  };
  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
