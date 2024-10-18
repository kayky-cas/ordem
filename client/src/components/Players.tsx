import { CiLogout } from "react-icons/ci";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, IconButton, Stack } from "@chakra-ui/react";
import { PlayerAvatar } from "./PlayersAvatar.tsx";

export type Player = {
    name: string;
    avatar?: string;
};
type Props = {
    players: Array<Player>;
    hidePlayers: () => void;
};

export function Players({ players, hidePlayers }: Props) {
    return (
        <>
            <IconButton
                pos="absolute"
                aria-label="Close player tab"
                variant="ghost"
                colorScheme="whiteAlpha"
                icon={<ArrowLeftIcon />}
                left={2}
                top={2}
                onClick={hidePlayers}
            />
            <Grid
                h="full"
                w="full"
            >
                <Stack
                    pl="10"
                    pr="10"
                    align="center"
                    direction="column"
                    h="full"
                    w="full"
                    spacing="10"
                    overflowY="auto"
                    sx={{
                        "::-webkit-scrollbar": {
                            display: "none",
                        },
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {players.map((player, idx) => (
                        <PlayerAvatar
                            mt={idx === 0 ? "10" : "0"}
                            key={player.name}
                            player={player}
                            isTurn={idx === 0}
                            showName={true}
                        />
                    ))}
                </Stack>
                <Box
                    zIndex={1}
                    width="full"
                    height="full"
                    p={10}
                    boxShadow="0 -20px 20px rgba(0, 0, 0, 0.2)" // Negative value for shadow to grow upwards
                    _hover={{
                        boxShadow: "0 -25px 25px rgba(0, 0, 0, 0.3)", // More pronounced shadow on hover
                    }}
                >
                    <Button
                        width="full"
                        height="50px"
                        leftIcon={<CiLogout />}
                        colorScheme="red"
                        variant="solid"
                        fontSize="x-large"
                    >
                        Sair
                    </Button>
                </Box>
            </Grid>
        </>
    );
}
