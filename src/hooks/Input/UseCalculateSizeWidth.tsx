import { IconComponent } from "../../components/Input";

export const UseCalculateSizeWidth = (
  iconLeft: IconComponent,
  iconRight: IconComponent
) => {
  if (iconLeft && iconRight) {
    return "80%";
  } else if (iconLeft || iconRight) {
    return "90%";
  } else {
    return "100%";
  }
};
