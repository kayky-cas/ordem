// @deno-types="@types/react"
import { useState } from "react";
import { Board } from "./components/Board.tsx";
import { type Player, Players } from "./components/Players.tsx";
import { Scenarios } from "./components/Scenarios.tsx";
import { Avatar, Box, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { PlayerAvatar } from "./components/PlayersAvatar.tsx";

function App() {
    const [playersHidden, setPlayersHidden] = useState(false);
    const [scenariosHidden, setScenariosHidden] = useState(false);

    const players: Array<Player> = new Array(10).fill(null).map((_, i) => {
        return {
            name: `Player ${i + 1}`,
            // avatar: `https://avatars.dicebear.com/api/avataaars/${i}.svg`,
        };
    });

    return (
        <>
            <IconButton
                pos="absolute"
                aria-label="Close player tab"
                variant="ghost"
                colorScheme="whiteAlpha"
                icon={<ArrowRightIcon />}
                left={2}
                top={2}
                hidden={!playersHidden}
                onClick={() => {
                    setPlayersHidden(false);
                }}
            />

            <Box
                left="calc(2.5vw + 6px)"
                top={10}
                pos="absolute"
                hidden={!playersHidden}
            >
                <PlayerAvatar
                    mt="0"
                    player={players[0]}
                    isTurn={true}
                    showName={false}
                    opacity={0.8}
                />
            </Box>
            <Grid
                templateAreas={playersHidden
                    ? `"board"
             "scenarios"`
                    : `"players board"
             "players scenarios"`}
                h="100vh"
                gridTemplateColumns={`${playersHidden ? "" : "10vw"} 1fr`}
                gridTemplateRows="1fr 15%"
            >
                <GridItem
                    gridArea="players"
                    bg="blackAlpha.900"
                    hidden={playersHidden} // TODO: maybe should not even render this?
                >
                    <Players
                        players={players}
                        hidePlayers={() => {
                            setPlayersHidden(true);
                        }}
                    />
                </GridItem>
                <GridItem area={"board"} bg={"blue"}>
                    <Board />
                </GridItem>
                <GridItem area={"scenarios"} bg={"green"}>
                    <Scenarios />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
