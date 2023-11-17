import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Searchbar, IconButton } from "react-native-paper";
import removeAccents from "remove-accents";

import MovieModal from "./modal/movieModal";
import homeStyles from "./style";
import MovieDao from "../dao/movieDao";
import Movie from "../domain/movies";

export default function HomePage() {
  const [listaFilmes, setListaFilmes] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movieDao = new MovieDao();
    setTimeout(() => {
      movieDao.findAll().then((filmes) => {
        setListaFilmes(filmes);
        setFilteredMovies(filmes);
        setIsLoading(false);
      });
    });
  }, []);

  function onChangeSearch(query: string) {
  setSearchQuery(query);

  if (listaFilmes) {
    const normalizedQuery = removeAccents(query); // Remove accents from the query
    const filtered = listaFilmes.filter((item) => {
      return (
        (item.titulo &&
          removeAccents(item.titulo.toLowerCase()).includes(
            normalizedQuery.toLowerCase()
          )) ||
        (item.sinopse &&
          removeAccents(item.sinopse.toLowerCase()).includes(
            normalizedQuery.toLowerCase()
          )) ||
        (item.genero &&
          removeAccents(item.genero.toLowerCase()).includes(
            normalizedQuery.toLowerCase()
          ))
      );
    });
    setFilteredMovies(filtered);
  }
}

  const renderFilme = ({ item }: { item: Movie }) => {
    return (
      <View style={homeStyles.card}>
        <View style={homeStyles.content}>
          <Image source={{ uri: item.imagem }} style={homeStyles.imagem} />
          <View style={homeStyles.textContainer}>
            <Text style={homeStyles.titulo}>{item.titulo}</Text>
            <Text style={homeStyles.sinopse} numberOfLines={4}>
              {item.sinopse}
            </Text>
            <TouchableOpacity
              style={homeStyles.cardButton}
              onPress={() => {
                setSelectedMovie(item);
                setIsModalVisible(true);
              }}
            >
              <Text style={{ textAlign: "center" }}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <StatusBar />
      <View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#00703c"
            style={{ marginTop: "50%" }}
          />
        ) : listaFilmes ? (
          <View>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                height: 40,
                position: "absolute",
                padding: 8,
                paddingTop:0,
                alignItems:'center',
                
              }}
            >
              <Searchbar            
              placeholder="Pesquisar"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{flexDirection:'row', width: "100%", height: "100%", marginTop:'5%'}}
                inputStyle={{ fontSize: 12, alignSelf:'center', height:"100%" }}
              />
              
            </View>
            <FlatList
              style={{ marginTop: 70 }}
              data={filteredMovies}
              renderItem={renderFilme}
              keyExtractor={(item) => item.titulo}
            />
          </View>
        ) : (
          <Text>Nenhum filme encontrado.</Text>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <MovieModal
            movie={selectedMovie}
            closeModal={() => setIsModalVisible(false)}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}
