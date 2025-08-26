import { Dimensions } from "react-native";

// 新的竖版设计稿大小 1倍 横版没变
const designWidth = 375;
const designHeight = 812;
export const getScaleRatio = () => {
  let SCREEN_HEIGHT = Dimensions.get("window").height;
  let SCREEN_WIDTH = Dimensions.get("window").width;
  return Math.min(SCREEN_HEIGHT / designHeight, SCREEN_WIDTH / designWidth);
};
