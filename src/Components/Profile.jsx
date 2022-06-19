import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
        >
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </MenuButton>
        <MenuList zIndex={10000}>
          <Link as={RouterLink} to="/cart">
            <MenuItem>Cart</MenuItem>
          </Link>
          <Link as={RouterLink} to="/orders">
            <MenuItem>Your Orders</MenuItem>
          </Link>
          <Link as={RouterLink} to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
