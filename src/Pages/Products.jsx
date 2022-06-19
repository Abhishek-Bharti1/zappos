import { Box, Stack, Heading, Flex, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FilterComponents from "../Components/FilterComponents";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getSingleProduct } from "../Redux/products/action";
import { useSearchParams } from "react-router-dom";
import ProductSimple from "../Components/ProductSimple";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Products = () => {
  //1. to get products from store
  const products = useSelector((store) => store.ecommerceData.products);
  // console.log([products]);
  // const id = useSelector((store) => store.ecommerceData.products.id);
  const dispatch = useDispatch();
  //1.to change in the url by using params
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length, searchParams]);
  // console.log(products);

  const { id } = useParams();
  // console.log(params);
  // const dispatch = useDispatch();
  const currentProduct = useSelector(
    (store) => store.ecommerceData.currentProduct
  );
  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch, id]);
  return (
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minWidth={"15rem"}>
          <FilterComponents />
        </Box>
        <Box>
          <Heading as="h3"> Products</Heading>
          <Link as={RouterLink} to={`/${id}`} component={id}>
            <Flex flexWrap="wrap" justifyContent="space-around">
              {products.map((product) => {
                return (
                  <ProductSimple
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </Flex>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
