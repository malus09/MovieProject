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


import MovieModal from "./modal/movieModal";
import homeStyles from "./style";
import MovieDao from "../dao/movieDao";
import Movie from "../domain/movies";


const HomePage: React.FC = () => {
  const [listaFilmes, setListaFilmes] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const movieDao = new MovieDao();
    setTimeout(() => {
      movieDao.findAll().then((filmes) => {
        setListaFilmes(filmes);
        setIsLoading(false);
      });
    });
  }, []);



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
      <View >
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#00703c"
            style={{ marginTop: "50%" }}
          />
        ) : listaFilmes ? (
          <FlatList 
            data={listaFilmes}
            renderItem={renderFilme}
            keyExtractor={(item) => item.titulo}
          />
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
};

export default HomePage;
