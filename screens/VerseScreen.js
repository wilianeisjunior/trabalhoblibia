import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";

const VerseScreen = ({ route }) => {
  const { abbrev, bookName, chapter } = route.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${chapter}`
      )
      .then((response) => {
        setVerses(response.data.verses);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [abbrev, chapter]);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {bookName} - Capítulo {chapter}
      </Text>
      <FlatList
        data={verses}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <View style={styles.verseContainer}>
            <Text style={styles.verseNumber}>{item.number}</Text>
            <Text style={styles.verseText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
  },
  verseContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  verseNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    width: 40,
    textAlign: "center",
  },
  verseText: {
    fontSize: 18,
    flex: 1,
  },
});

export default VerseScreen;
