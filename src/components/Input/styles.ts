import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: themes.colors.bgScreen,
    borderColor: themes.colors.ligthGray,
  },

  input: {
    width: "90%",
    height: "100%",
    borderRadius: 40,
    paddingLeft: 5,
  },

  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 20,
  },

  icon: {
    width: "100%",
  },
});
