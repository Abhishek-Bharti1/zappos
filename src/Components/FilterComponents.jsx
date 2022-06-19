import React, { useState } from "react";
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/products/action";

const FilterComponents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.getAll("category"));
  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []
  );
  const categoryHandler = (values) => {
    // console.log(values);
    setCategoryValues(values);
  };

  useEffect(() => {
    if (categoryValues) {
      setSearchParams({ category: categoryValues });
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [categoryValues, searchParams, setSearchParams, dispatch]);

  return (
    <Box>
      <Box display={{ bas: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's Clothing</Checkbox>
            <Checkbox value="women's clothing">Women's Clothing</Checkbox>
            <Checkbox value="jewelery">jewelery</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponents;
