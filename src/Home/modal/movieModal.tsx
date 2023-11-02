import React from "react";
import {
  View,
  Text,
  Modal,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Movie from "../../domain/movies";
import modalStyles from "./style";

interface MovieModalProps {
  movie: Movie | null;
  closeModal: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, closeModal }) => {
  if (!movie) return null;

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Image
            source={{ uri: movie.imagem }}
            style={modalStyles.modalImage}
          />
          <Text style={modalStyles.modalTitle}>{movie.titulo}</Text>
          <Text>{movie.sinopse}</Text>
          <Text>Tempo: {movie.tempo}</Text>
          <Text>Gênero: {movie.genero}</Text>
          <Text>Idade Indicativa: {movie.idadeIndicativa}</Text>
          <TouchableOpacity
            style={modalStyles.closeButton}
            onPress={closeModal}
          >
            <Text style={modalStyles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MovieModal;
