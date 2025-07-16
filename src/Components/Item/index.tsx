import { memo } from "react";
import { Text } from "react-native";

const Component = ({ name, likes }: { name: string; likes: number }) => {
  return (
    <Text>
      {name} - {likes}
    </Text>
  );
};

const Item = memo(Component, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});

// criterio de comparacao para re-renderizar o componente
// se o nome e o numero de likes forem iguais, o componente nao sera re-renderizado
// se o nome e o numero de likes forem diferentes, o componente sera re-renderizado
export default Item;