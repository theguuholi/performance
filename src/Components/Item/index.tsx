import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import lodash from "lodash";

const Component = ({ name, likes, follow }: { name: string; likes: number; follow: () => void }) => {
  return (
    <View>
      <Text>
        {name} - {likes}
      </Text>
      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
};

const Item = memo(Component, (prevProps, nextProps) => {
  // return Object.is(prevProps, nextProps);
  return lodash.isEqual(prevProps, nextProps);
});

// indicado para componentes puros
// criterio de comparacao para re-renderizar o componente
// se o nome e o numero de likes forem iguais, o componente nao sera re-renderizado
// se o nome e o numero de likes forem diferentes, o componente sera re-renderizado
export default Item;