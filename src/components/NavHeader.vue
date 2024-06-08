<!-- script -->
<script setup>
	import { RouterLink } from "vue-router";
</script>

<!-- template -->
<template>
	<nav class="w-full h-20 px-4 flex justify-between items-center">
		<section role="title">
			<h1
				class="text-2xl font-black tracking-tighter diagonal-gr drop-shadow-2xl group cursor-pointer drop-shadow-md"
			>
				<RouterLink to="/">Simple Wiki</RouterLink>
			</h1>
		</section>

		<section role="feedback">
			<a class="cursor-pointer" href="mailto:aryadewanggapuja@gmail.com">
				<span
					class="bg-[hsl(0,0%,8%)] p-2 rounded-lg text-sm font-bold transition-colors duration-500 text-zinc-200 drop-shadow-lg hover:bg-zinc-200 hover:text-zinc-800"
					>Feedback</span
				>
			</a>
		</section>
	</nav>
</template>

<!-- style -->
<style scoped>
	.diagonal-gr {
		background-image: -webkit-linear-gradient(
			50deg,
			hsl(0, 0%, 8%) 70%,
			hsl(0, 0%, 95%) 50.3%
		);
		background-size: 200% 100%;
		background-position: -95px 0px;
		background-clip: text;
		color: transparent;
	}
</style>
