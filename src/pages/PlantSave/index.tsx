import React, { useState } from "react";

import {
  Container,
  PlantInfo,
  Scroll,
  Svg,
  PlantName,
  PlantText,
  Controllers,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
} from "./styles";

import waterDropImg from "../../assets/waterdrop.png";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { Alert, Platform } from "react-native";
import { isBefore, format } from "date-fns";
import { PlantProps, savePlant } from "../../libs/storage";

interface Params {
  plant: PlantProps;
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

  const route = useRoute();
  const navigation = useNavigation()
  const { plant } = route.params as Params;

  const handleChangeTime = (_: Event, dateTime: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! ⏰");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleSave = async () => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

    navigation.navigate('Confirmation', {
      title: 'Tudo certo',
      subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
      buttonTitle: 'Muito obrigado :D',
      icon: 'hug',
      nextScreen: 'MyPlants'
    })

    } catch (error) {
      return Alert.alert("Não foi possivel salvar! 😢");
      
    }
  }

  return (
    <Scroll>

    <Container>
      <PlantInfo>
        <Svg height={150} width={150} uri={plant.photo} />

        <PlantName>{plant.name}</PlantName>
        <PlantText>{plant.about}</PlantText>
      </PlantInfo>

      <Controllers>
        <TipContainer>
          <TipImage source={waterDropImg} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

        {showDatePicker && (
          <DateTimePicker
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
            value={selectedDateTime}
          />
        )}

        {
          Platform.OS === 'android' && (
            <DateTimePickerButton onPress={() => setShowDatePicker(oldValue => !oldValue)}>
            <DateTimePickerText>
              {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </DateTimePickerText>
            </DateTimePickerButton>
          )
        }

        <Button title="Cadastrar planta" onPress={handleSave} />
      </Controllers>
    </Container>
    </Scroll>

  );
};

export default PlantSave;
