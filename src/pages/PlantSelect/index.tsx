import React, { useCallback, useEffect, useState } from "react";

import EnviromentButton from "../../components/EnviromentButton";
import Load from "../../components/Load";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import { api } from "../../services/api";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Wrapper,
  HeaderStyled,
  Title,
  Span,
  List,
  PlantsList,
} from "./styles";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { PlantProps } from "../../libs/storage";

interface EnviromentProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  const fetchPlants = useCallback(async () => {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }, []);

  useEffect(() => {
    const fetchEnviroment = async () => {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );

      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    };

    fetchEnviroment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  };

  const handleEnviromentSelected = (enviroment: string): void => {
    setEnviromentSelected(enviroment);

    if (!plants) return;
    if (enviroment === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(enviroment)
    );

    setFilteredPlants(filtered);
  };

  const handlePlantSelect = (plant: PlantProps) => {
    navigation.navigate("PlantSave", { plant });
  };

  if (loading) return <Load />;

  return (
    <Container>
      <Wrapper>
        <HeaderStyled />
        <Title>Em qual ambiente</Title>
        <Span>Você quer colocar sua planta?</Span>
      </Wrapper>

      <List
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item: any) => String(item.key)}
        data={enviroments}
        renderItem={({ item }: any) => (
          <EnviromentButton
            active={item.key === enviromentSelected}
            onPress={() => handleEnviromentSelected(item.key)}
            title={item.title}
          />
        )}
      />

      <PlantsList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
        }
        data={filteredPlants}
        renderItem={({ item }: any) => (
          <PlantCardPrimary
            onPress={() => handlePlantSelect(item)}
            photo={item.photo}
            name={item.name}
          />
        )}
      />
    </Container>
  );
};

export default PlantSelect;
