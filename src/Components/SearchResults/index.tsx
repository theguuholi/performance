import { View } from "react-native";
import Item from "../Item";

const SearchResults = ({
  data,
}: {
  data: { id: string; name: string; likes: number }[];
}) => {
  return (
    <View>
      {data.map((friend) => (
        <Item key={friend.id} name={friend.name} likes={friend.likes} />
      ))}
    </View>
  );
};

export default SearchResults;