import React from "react";
import {
  ActivityIndicatorBase,
  Text,
  TouchableHighlightProps,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";

type ButtonProps = TouchableHighlightProps & {
  title: string;
  loading?: boolean;
};

export default function Button({ ...props }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={style.button} activeOpacity={0.6} {...props}>
        {props.loading ? (
          <ActivityIndicatorBase />
        ) : (
          <Text style={style.textButton}>{props.title}</Text>
        )}
      </TouchableOpacity>
    </>
  );
}
