import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (<Box mr="4" textAlign="right">
        <Text>Italo Almeida</Text>
        <Text color="gray.300" fontSize="small">
          italoalmeida89@gmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md" name="Italo Almeida" src="https://github.com/italoalmeida89.png" />
    </Flex>
  );
}