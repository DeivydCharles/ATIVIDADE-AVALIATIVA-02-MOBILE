import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';

const API_URL =  'https://www.omdbapi.com/?s=spider%20man&apikey=1cd66749'

export default function HomeScreen({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

   useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        if (dados.Response === 'True') {
          setFilmes(dados.Search);
        } else {
          setErro(dados.Error);
        }
      } catch (e) {
        setErro('Não foi possível carregar os filmes!');
      } finally {
        setCarregando(false);
      }
    }
    buscarFilmes();
  }, []);

    if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

   if (erro) {
    return (
      <View style={styles.centro}>
        <Text>{erro}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <Card
          style={styles.card}
          onPress={() => navigation.navigate('Detalhes', { imdbID: item.imdbID })}
        >
          {item.Poster !== 'N/A' && <Card.Cover source={{ uri: item.Poster }} />}
          <Card.Title title={item.Title} subtitle={`${item.Year} • ${item.Type}`} />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lista: { padding: 12 },
  card: { marginBottom: 12 },
  
});