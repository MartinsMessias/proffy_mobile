import React from "react";
import { View } from "react-native";

import style from "./styles";
import PageHeader from "../Components/PageHeader";

function TeacherList() {
  return (
    <View style={style.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;
