import React from "react";
import { style } from "./styles";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { themes } from "../../global/themes";

export default ({ state, navigation }: { state: any; navigation: any }) => {
  const goToPage = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <>
      <View style={style.tabArea}>
        <TouchableOpacity
          style={style.tabItem}
          onPress={() => goToPage("List")}
        >
          <AntDesign
            name="bars"
            size={32}
            style={{
              opacity: state.index === 0 ? 1 : 0.4,
              color: themes.colors.primary,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.tabItemButtom}>
          <View style={{ width: "100%", left: 10, top: 4 }}>
            <Entypo name="plus" size={40} color={themes.colors.secondary} />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              width: "100%",
              right: 10,
              bottom: 10,
            }}
          >
            <MaterialIcons
              name="edit"
              size={30}
              color={themes.colors.secondary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.tabItem}
          onPress={() => goToPage("User")}
        >
          <FontAwesome
            name="user"
            size={32}
            style={{
              opacity: state.index === 1 ? 1 : 0.4,
              color: themes.colors.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
