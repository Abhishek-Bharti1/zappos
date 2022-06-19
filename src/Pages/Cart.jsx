import React from "react";
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { addOrder, removeProductCart } from "../Redux/products/action";
import { useDispatch } from "react-redux";
import CheckOut from "../Components/CheckOut";

const Cart = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    console.log("going to remove id", id);
    dispatch(removeProductCart(id));
  };

  // add products to checkout in database
  const checkoutHandler = () => {
    dispatch(addOrder(cart));
  };

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Cart
      </Heading>
      {cart.length &&
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              removeProduct={removeProduct}
            />
          );
        })}
      {/* to pop window when clicking on Checkout button */}
      <CheckOut cart={cart} checkoutHandler={checkoutHandler} />
    </Box>
  );
};

function CartItem({ id, image, price, title, description, removeProduct }) {
  return (
    <Box
      border={"1px solid red"}
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      marginBottom="2rem"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box
          height={"300px"}
          width={"300px"}
          position="relative"
          padding="0 1rem"
          margin-left="0.5rem"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
            rounded={"lg"}
            height={300}
            width={300}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Box height={"400px"} width={"400px"}>
          <Stack p={4}>
            <Heading as="h4" size="lg">
              {title}
            </Heading>
            <Text>{description}</Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₹ {price}
            </Text>
            <Button
              variant={"solid"}
              leftIcon={<DeleteIcon />}
              onClick={() => removeProduct(id)}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
export default Cart;
