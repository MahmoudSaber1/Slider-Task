import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardImage = ({ item }) => {
	return (
		<>
			<Box position={"relative"}>
				<Image src={item.image} borderRadius={"10px"} />
				<Box className="details" bottom={["-20%", "-25%", "-28"]}>
					<Box textAlign="left">
						<Text fontSize={["13px"]} px="2" py="1" fontWeight="bold">
							{item.title}
						</Text>
					</Box>
					<Flex
						w={"100%"}
						flexWrap={"wrap"}
						gap={[2, 2, 2, 6]}
						py="2"
						px={1}
						alignItems="center"
						justifyContent={"center"}
						borderRadius="0 0 10px 10px"
						backgroundColor={`${"var(--black-color)"}`}
						zIndex="99"
					>
						<Text fontSize={"15px"} fontWeight="bold">
							{item.lost}
							<Text fontWeight="300" fontSize={"13px"}>
								Last bid
							</Text>
						</Text>
						<Text fontSize={"15px"} fontWeight="bold">
							{item.time}
							<Text fontWeight="300" fontSize={"13px"}>
								Time left
							</Text>
						</Text>
						<Button size={"sm"} colorScheme="yellow">
							BID NOW
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default CardImage;
