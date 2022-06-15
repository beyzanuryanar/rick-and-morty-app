import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Layout, Loading } from "../../components";
import { getCharacterEpisodes } from "../../helper/api";
import CharacterInfoCard from "./components/CharacterInfoCard";
import DetailItem from "./components/DetailItem";
import { styles } from "../../styles/CharacterDetail.styles";

const CharacterDetail = ({ route }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    setLoading(true);
    const data = await getCharacterEpisodes(item.episode);
    setEpisodes(data);
    setLoading(false);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <Layout scroll>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
        />
      </View>
      <Text style={styles.infoTitle}>INFO</Text>
      <View style={styles.infoContainer}>
        <CharacterInfoCard title={"Gender"} description={item.gender} iconName={"account-circle-outline"} />
        <CharacterInfoCard title={"Species"} description={item.name} iconName={"power-socket-us"} />
        <CharacterInfoCard title={"Location"} description={item.location.name} iconName={"map-marker"} />
      </View>
      <Text style={styles.episodesTitle}>EPİSODES</Text>
      <View style={styles.detailContainer}>
        {
          loading ?
            <Loading />
            :
            episodes.map((item, index) => {
              return (
                <DetailItem index={index} item={item} />
              );
            })
        }
      </View>
    </Layout>
  );
};

export default CharacterDetail;
