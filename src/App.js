import { Slider } from "./components";
import { Flex, Heading } from "@chakra-ui/react";

import { experiences } from "./common/data";

const App = () => {
	return (
		<Flex
			height={"100vh"}
			justifyContent="center"
			w="100%"
			py={[2, 5, 8]}
			flexDirection={"column"}
		>
			<Heading
				textAlign={"center"}
				letterSpacing="1px"
				fontStyle={"italic"}
				fontSize={["md", "xl", "2xl", "4xl"]}
				pb="5"
			>
				Simple React Slider (Task)
			</Heading>

			<Flex flexDirection={"column"}>
				<Slider data={experiences} />
			</Flex>
		</Flex>
	);
};

export default App;
