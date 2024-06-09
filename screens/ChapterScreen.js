import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const ChapterScreen = ({ route, navigation }) => {
  const { abbrev, bookName, chapters } = route.params;

  // Gerar array de números de capítulos
  const chaptersArray = Array.from({ length: chapters }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bookName}</Text>
      <FlatList
        data={chaptersArray}
        keyExtractor={(item) => item.toString()}
        horizontal={true} // Exibir os itens horizontalmente
        showsHorizontalScrollIndicator={false} // Ocultar barra de rolagem horizontal
        contentContainerStyle={styles.flatListContainer} // Estilo para o conteúdo da FlatList
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chapterButton}
            onPress={() =>
              navigation.navigate("Verses", { abbrev, bookName, chapter: item })
            }
          >
            <Text style={styles.chapterNumber}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  flatListContainer: {
    flexDirection: "row", // Alinha os botões horizontalmente
    flexWrap: "wrap", // Permite quebrar linha quando não couber mais itens na largura da tela
    justifyContent: "center", // Centraliza os botões horizontalmente
  },
  chapterButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10, // Espaçamento horizontal entre os botões
    marginBottom: 10, // Espaçamento vertical entre os botões
  },
  chapterNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChapterScreen;
