import { useCallback, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import SearchResults from "../../Components/SearchResults";

const Home = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  // tem components que nao precisam ser recalculados sempre
  // useMemo e para memorizar um valor em resumo. NAO UTILIZAR CALCULOS SIMPLES

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3001/friends?q=${name}`);
    const data = await response.json();
    setData(data);
  };

  const handleFollow = useCallback((id: string) => {
    console.log("seguir", id);
  }, []);
  // useCallback memoriza a funcao
  // useCallback e para memorizar uma funcao

  return (
    <View>
      <Text>Produtos</Text>
      <TextInput onChangeText={setName} placeholder="Nome do Cliente" />
      <Button title="Adicionar" onPress={handleSearch} />
      <ScrollView>
        <SearchResults data={data} follow={handleFollow} />
      </ScrollView>
    </View>
  );
};

export default Home;