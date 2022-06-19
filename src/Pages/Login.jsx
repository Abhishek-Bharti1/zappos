import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../Redux/auth/actions";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import CheckOut from "../Components/CheckOut";
import Orders from "./Orders";
export default function Login() {
  const dispatch = useDispatch();
  // 9. user Authentication
  const authStatus = useSelector((store) => store.authReducer.auth);
  console.log(authStatus);

  // setting state to get form data on login page
  const [userEmail, setUserEmail] = useState("abhi@gmail.com");
  const [userPassword, setUserPassword] = useState("");

  // function to get login text
  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  // function to get password text
  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };
  // geting form data on login page
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email", userEmail, "password", userPassword);
    dispatch(signIn({ email: userEmail, password: userPassword }));
  };

  // 9. user Authentication
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.pathname && authStatus) {
      navigate(location.state.pathname, { replace: true });
    }
  }, [location?.state, navigate, authStatus]);
  console.log(location);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={userEmail}
                onChange={handleUserEmailChange}
              />
            </FormControl>
            <form onSubmit={submitHandler}>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={userPassword}
                  onChange={handleUserPasswordChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
               <Link to={"/orders"} element={<Orders/>}> <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button></Link>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
