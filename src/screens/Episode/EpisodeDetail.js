import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getEpisodeCharacters } from "../../helper/api";
import DetailItem from "./components/DetailItem";
import EpisodeInfoCard from "./components/EpisodeInfoCard";
import { Layout, Loading } from "../../components";
import { styles } from "../../styles/EpisodeDetail.styles";

const EpisodeDetail = ({ route }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    setLoading(true);
    const data = await getEpisodeCharacters(item.characters);
    setCharacters(data);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout scroll>
      <Text style={styles.infoTitle}>INFO</Text>
      <View style={styles.infoCardContainer}>
        <EpisodeInfoCard title={"Name"} description={item.name} iconName={"television"} />
        <EpisodeInfoCard title={"Air Date"} description={item.air_date} iconName={"calendar-range"} />
        <EpisodeInfoCard title={"Code"} description={item.episode} iconName={"math-norm-box"} />
      </View>
      <Text style={styles.characterTitle}>CHARACTERS</Text>
      <View style={styles.detailContainer}>
        {
          loading ?
            <Loading />
            :
            characters.map((item, index) => {
              return (
                <DetailItem index={index} item={item} />
              );
            })
        }
      </View>
    </Layout>
  );
};

export default EpisodeDetail;
