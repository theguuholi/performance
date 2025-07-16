import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import SearchResults from "../../Components/SearchResults";

const Home = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  // tem components que nao precisam ser recalculados sempre

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3001/friends?q=${name}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <View>
      <Text>Produtos</Text>
      <TextInput onChangeText={setName} placeholder="Nome do Cliente" />
      <Button title="Adicionar" onPress={handleSearch} />
      <ScrollView>
        <SearchResults data={data} />
      </ScrollView>
    </View>
  );
};

export default Home;