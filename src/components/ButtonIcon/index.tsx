import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { View, Text, Image } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
