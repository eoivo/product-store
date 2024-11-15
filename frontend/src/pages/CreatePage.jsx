import {
  Box,
  Button,
  Container,
  Heading,
  useColorModeValue,
  useToast,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast({
        title: "Error",
        description: "Todos os campos são obrigatórios.",
        status: "error",
        isClosable: true,
      });
      return;
    }

    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Erro",
        description: "Erro ao criar produto",
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Sucesso",
        description: "Produto criado com sucesso!",
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  const handlePriceInput = (e) => {
    const value = e.target.value;

    const formattedValue = value.replace(/[^\d.,]/g, "").replace(",", ".");

    setNewProduct({ ...newProduct, price: formattedValue });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Criar novo produto
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Digite o nome do produto"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Digite o preço do produto"
              value={newProduct.price}
              onChange={handlePriceInput}
            />

            <Input
              placeholder="Imagem do produto"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Adicionar produto
            </Button>

            <Button colorScheme="gray" onClick={handleGoHome} w="full" mt={4}>
              Voltar ao Início
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
