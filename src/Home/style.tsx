import { StyleSheet, Platform } from "react-native";

const shadowStyle = Platform.select({
  ios: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  android: {
    elevation: 5,
  },
});

const homeStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3c3c44",
    marginBottom: "20%",
  },
  card: {
    height:'auto',
    backgroundColor: "black",
    margin: 10,
    marginBottom: 0,
    padding: 10,
    borderRadius: 10,
    ...shadowStyle,
  },
  imagem: {
    minWidth: "40%",
    height: 280,
    resizeMode: "cover",
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6cb48c",
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 16,
    color: "#b4986c",
  },
  info: {
    fontSize: 14,
    color: "#2c3054",
  },
  content: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
  cardButton: {
    alignSelf: "flex-end",
    backgroundColor: "#b4986c",
    height: "15%",
    width: "50%",
    borderRadius: 4,
    justifyContent: "center",
  },
});

export default homeStyles;
