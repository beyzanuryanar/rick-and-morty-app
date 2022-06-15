import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Layout, Loading } from "../../components";
import EpisodeListItem from "./components/EpisodeListItem";
import { getEpisode } from "../../helper/api";
import { styles } from "../../styles/Episodes.styles";

const Episodes = ({ navigation }) => {
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState(1);

  const renderItem = ({ item }) => (
    <EpisodeListItem item={item} onPress={() => navigation.navigate("EpisodeDetail", { item: item })} />
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      getEpisode(credentials)
        .then(response => {
          setLoading(false);
          setEpisode(credentials === 1 ? response.results : [...episode, ...response.results]);
        })
        .catch(err => {
          setLoading(false);
          console.log("err", err);
        });
    })();
  }, [credentials]);

  const onRefresh = () => {
    setCredentials(1);
  };
  const onEndReached = () => {
    if (!loading) {
      setCredentials(credentials + 1);
    }
  };

  return (
    <Layout>
      {
        loading ?
          <Loading />
          :
          <View style={styles.episodeContainer}>
            <FlatList
              data={episode}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onRefresh={onRefresh}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.01}
              refreshing={loading}
            />
          </View>
      }
    </Layout>
  );
};

export default Episodes;
