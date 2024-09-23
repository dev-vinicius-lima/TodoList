import { IconComponent } from "../../components/Input";

export const UseCalculatePaddingLeft = (
  iconLeft: IconComponent,
  iconRight: IconComponent
) => {
  if (iconLeft && iconRight) {
    return 10;
  } else if (iconLeft || iconRight) {
    return 10;
  } else {
    return 20;
  }
};
