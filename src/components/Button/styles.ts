import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  button: {
    marginTop: 20,
    width: 240,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  textButton: {
    color: themes.colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
