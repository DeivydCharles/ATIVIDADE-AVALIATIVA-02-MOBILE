import React, { useEffect, useState} from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Chip, ActivityIndicator } from 'react-native-paper';

export default function DetalhesScreen({ route }) {
  const { imdbID } = route.params;
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        const resposta = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=1cd66749`
        );
        setFilme(await resposta.json());
      } catch (e) {
        console.error(e);
      }
    }
    buscarDetalhes();
  }, [imdbID]);

   if (!filme) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        {filme.Poster !== 'N/A' && <Card.Cover source={{ uri: filme.Poster }} />}
        <Card.Content style={styles.conteudo}>
          <Text variant="headlineSmall">{filme.Title}</Text>
          <View style={styles.chips}>
            <Chip style={styles.chip}>{filme.Year}</Chip>
            <Chip style={styles.chip}>{filme.Runtime}</Chip>
            <Chip style={styles.chip}>⭐ {filme.imdbRating}</Chip>
          </View>
          <Text variant="labelLarge">Gênero</Text>
          <Text style={styles.texto}>{filme.Genre}</Text>
          <Text variant="labelLarge">Diretor</Text>
          <Text style={styles.texto}>{filme.Director}</Text>
          <Text variant="labelLarge">Sinopse</Text>
          <Text style={styles.texto}>{filme.Plot}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { padding: 12 },
  conteudo: { marginTop: 12 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  chip: { marginRight: 8, marginBottom: 8 },
  texto: { marginBottom: 15 },
});
