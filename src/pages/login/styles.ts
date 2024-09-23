import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxTop: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },

  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 35,
  },

  boxBottom: {
    alignItems: "center",
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },

  logo: {
    width: 80,
    height: 80,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
  },

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

  textRegister: {
    fontSize: 16,
    color: themes.colors.gray,
  },
});
