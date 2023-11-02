import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  modalImage: {
    width: 200,
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  closeButton: {
    padding: 10,
    top: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default modalStyles;
