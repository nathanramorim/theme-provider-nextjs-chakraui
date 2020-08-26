// import Head from 'next/head'
import { Heading, Grid, Flex } from '@chakra-ui/core';
import React from 'react';
export default function Home() {
	return (
		<Grid
			as="main"
			height="100vh"
			gridTemplateColumns="1fr 480px 480px 1fr"
			gridTemplateRows="1fr 480px 1fr"
			gridTemplateAreas="
			'. . . .'
			'. logo form .'
			'. . . .'
			"
			justifyContent="center"
			alignItems="center"
		>
			<Flex gridArea="logo" flexDir="column" alignItems="flex-start">
				<img
					src="https://lh3.googleusercontent.com/proxy/Hv9UWjzH_0UkIUFOQTQqE5-133Kw-V6D9xO78kGIJmS4zwg1AC5cQ-gjW1K4sCZgVwQzA8NhvDi0sTYJqgHa7DPRhQqGkZNc0hufhZhLBALPVZ_Vsw"
					alt="Rocketseat"
				/>
				<Heading size="2xl">Faça seu login na plataforma</Heading>
			</Flex>
		</Grid>
	);
}
