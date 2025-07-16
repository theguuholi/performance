import { Text, View } from "react-native";
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
      {data.map((friend) => (
        <Item key={friend.id} name={friend.name} likes={friend.likes} follow={() => follow(friend.id)} />
      ))}
    </View>
  );
};

export default SearchResults;