import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { theme } from "../../global/theme";

import { styles } from "./styles";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { ListHeader } from "../../components/ListHeader";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "../../components/GuildIcon";




export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }  

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCloseModal(){
    setOpenGuildsModal(false);
  } 


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categorias
          </Text>

          <View>
            <CategorySelect
              hasCheckBox
              setCategory={setCategory}
              categorySelected={category}
            />
          </View>

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
            
                {
                  guild.icon ? <GuildIcon/> : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>{guild.name ? guild.name : 'Selecione um Servidor'}</Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e Mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e Minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.description}>
            <ListHeader title="Descrição" subtitle="Max 100 Caracteres" />
            <View style={styles.textArea}>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
      </ScrollView>

       <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
          <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView> 

    </KeyboardAvoidingView>
  );
}
