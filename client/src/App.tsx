// @deno-types="@types/react"
import { useEffect, useState } from "react";
import { Board } from "./components/Board.tsx";
import { type Player, Players } from "./components/Players.tsx";
import { Scenarios } from "./components/Scenarios.tsx";
import { Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function App() {
    const [playersHidden, setPlayersHidden] = useState(false);
    const [scenariosHidden, setScenariosHidden] = useState(false);

    const players: Array<Player> = [
        {
            name: "Player 1",
        },
        {
            name: "Player 2",
            avatar: "https://avatars.githubusercontent.com/u/20211289?v=4",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
        {
            name: "Player 3",
        },
    ];

    return (
        <>
            <IconButton
                hidden={!playersHidden}
                pos="absolute"
                aria-label="Open player tab"
                variant="ghost"
                colorScheme="whiteAlpha"
                icon={<ArrowRightIcon />}
                left={2}
                top={2}
                onClick={() => setPlayersHidden(false)}
            />
            <Grid
                templateAreas={`
                  "${playersHidden ? "" : "players"} board"
                  "${playersHidden ? "" : "players"} scenarios"`}
                h="100vh"
                gridTemplateColumns={`${playersHidden ? "" : "10%"} 1fr`}
                gridTemplateRows="1fr 15%"
            >
                <GridItem
                    area={"players"}
                    bg="blackAlpha.900"
                    transition="background 0.2s ease-in-out"
                    transitionDelay="0.2s"
                    hidden={playersHidden}
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
