import { FlatList, Text, View } from "react-native";
import Item from "../Item";
import { useMemo } from "react";

const SearchResults = ({
  data,
  follow,
}: {
  data: { id: string; name: string; likes: number }[];
  follow: (id: string) => void;
}) => {
  const totalLikes = useMemo(() => data.reduce((acc, friend) => acc + friend.likes, 0), [data]);
  // useMemo e para memorizar um valor em resumo. NAO UTILIZAR CALCULOS SIMPLES
  // useCallback memoriza a funcao
  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
      {/*
      // nao e recomendado passar a funcao para o componente
      // pois o componente sera recriado a cada renderizacao
      // e a funcao sera recriada a cada renderizacao
      // funciona para poucos elementos
      {data.map((friend) => (
        <Item key={friend.id} name={friend.name} likes={friend.likes} follow={() => follow(friend.id)} />
      ))} */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item name={item.name} likes={item.likes} follow={() => follow(item.id)} />}
      />
    </View>
  );
};

export default SearchResults;