module.exports = () => {
    const data = {
        products: []
    }

    for(let i = 0; i < 1000; i++){
        data.products.push({
            id: i + 1,
            price: 80,
            title: `Camiseta: ${i}`
        })
    }

    return data;
}

// 1. Criar uma nova versao do component, 
// 2. comparar com a versao anterior, 
// 3. Se houveram alteracoes, vai atualizar.o que alterou