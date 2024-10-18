import { Avatar, Box, Text } from "@chakra-ui/react";
import type { Player } from "./Players.tsx";

type Props = {
    player: Player;
    isTurn: boolean;
    showName: boolean;
    mt?: string;
    opacity?: number;
};

export function PlayerAvatar({ player, isTurn, showName, mt, opacity }: Props) {
    return (
        <Box opacity={opacity}>
            <Avatar
                mt={mt}
                size={"xl"}
                name={player.name}
                src={player.avatar}
                border={isTurn ? "4px solid red" : ""}
            />
            <Text
                textAlign={"center"}
                color="white"
                fontSize="xl"
                mt="2"
                hidden={!showName}
            >
                {player.name}
            </Text>
        </Box>
    );
}
