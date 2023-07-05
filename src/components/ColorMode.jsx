import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex alignItems={"center"}>
        <Icon
          color="yellow.500"
          boxSize={6}
          mr={2}
          as={colorMode === "light" ? FiMoon : FiSun}
        />
        <Switch
          id="color-mode"
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </Flex>
    </div>
  );
};

export default ColorMode;
