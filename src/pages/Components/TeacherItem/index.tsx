import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: "https://github.com/MartinsMessias.png" }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Messias Martins</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos sequi
        delectus magnam saepe? Libero repudiandae expedita totam, nemo
        voluptates voluptas eveniet corrupti aliquam laborum ipsa earum sint
        harum atque.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora{"\b\b\b"}
          <Text style={styles.priceValue}>R$ 100,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
