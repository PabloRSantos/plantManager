import React, { useEffect, useState } from "react";

import Header from "../../components/Header";

import {
  Container,
  SpotLight,
  SpotText,
  SpotImage,
  Plants,
  PlantsTitle,
  List,
} from "./styles";
import waterDropImg from "../../assets/waterdrop.png";
import { loadPlant, PlantProps } from "../../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import PlantCardSecondary from "../../components/PlantCardSecondary";

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState("");

  useEffect(() => {
    const loadStorageData = async () => {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas`
      );
      setMyPlants(plantsStoraged);
      setLoading(false);
    };

    loadStorageData();
  }, []);

  return (
    <Container>
      <Header />
      <SpotLight>
        <SpotImage source={waterDropImg} />
        <SpotText>{nextWatered}</SpotText>
      </SpotLight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
        <List
          data={myPlants}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({item}: any) => (
            <PlantCardSecondary name={item.name} photo={item.photo} hour={item.hour} />
          )}
          showsVerticalScrollIndicator={false}
           />
      </Plants>
    </Container>
  );
};

export default MyPlants;
