import React, { forwardRef, LegacyRef } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { UseCalculateSizeWidth } from "../../hooks/Input/UseCalculateSizeWidth";
import { UseCalculatePaddingLeft } from "../../hooks/Input/UseCalculatePaddingLeft";

export type IconComponent = React.ComponentType<
  | React.ComponentProps<typeof MaterialIcons>
  | React.ComponentProps<typeof FontAwesome>
  | React.ComponentProps<typeof Octicons>
>;

export type InputProps = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  iconLeftName?: string;
  iconRightName?: string;
  titleInput?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

export const Input = forwardRef(
  (props: InputProps, ref: LegacyRef<TextInput>) => {
    const { titleInput, IconLeft, IconRight, iconLeftName, iconRightName } =
      props;

    const calcualteSizeWidth = UseCalculateSizeWidth(
      IconLeft as IconComponent,
      IconRight as IconComponent
    );

    const calculatePaddingLeft = UseCalculatePaddingLeft(
      IconLeft as IconComponent,
      IconRight as IconComponent
    );

    return (
      <>
        {titleInput && <Text style={style.titleInput}>{titleInput}</Text>}
        <View style={[style.boxInput, { paddingLeft: calculatePaddingLeft }]}>
          {IconLeft && iconLeftName && (
            <TouchableOpacity
              onPress={props.onIconLeftPress}
              style={style.icon}
            >
              <IconLeft
                name={iconLeftName as any}
                size={24}
                color={themes.colors.gray}
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={[style.input, { width: calcualteSizeWidth }]}
            {...props}
            ref={ref}
          />
          {IconRight && iconRightName && (
            <TouchableOpacity onPress={props.onIconRightPress}>
              <IconRight
                name={iconRightName as any}
                size={24}
                color={themes.colors.gray}
              />
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  }
);
