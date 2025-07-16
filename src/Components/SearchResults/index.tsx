import { Text, View } from "react-native";
import Item from "../Item";
import { useMemo } from "react";

const SearchResults = ({
  data,
}: {
  data: { id: string; name: string; likes: number }[];
}) => {
  const totalLikes = useMemo(() => data.reduce((acc, friend) => acc + friend.likes, 0), [data]);
  // useMemo e para memorizar um valor em resumo. NAO UTILIZAR CALCULOS SIMPLES
  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
      {data.map((friend) => (
        <Item key={friend.id} name={friend.name} likes={friend.likes} />
      ))}
    </View>
  );
};

export default SearchResults;