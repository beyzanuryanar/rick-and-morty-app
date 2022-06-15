import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Layout, Loading } from "../../components";
import { getAllCharacters } from "../../helper/api";
import CharacterListItem from "./components/CharacterListItem";

const Characters = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [credentials, setCredentials] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      getAllCharacters(credentials)
        .then(response => {
          setLoading(false);
          setCharacters(credentials === 1 ? response.results : [...characters, ...response.results]);
        })
        .catch(err => {
          setLoading(false);
          console.log("err", err);
        });
    })();
  }, [credentials]);

  const renderItem = ({ item }) => (
    <CharacterListItem item={item} onPress={() => navigation.navigate("CharacterDetail", { item: item })} />
  );

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
          <FlatList
            data={characters}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.01}
            refreshing={loading}
          />
      }
    </Layout>
  );
};

export default Characters;
