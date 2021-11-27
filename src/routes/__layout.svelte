<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
			props: {
				path: page.path
			}
		};
	}
</script>

<script lang="ts">
	import { NAV } from '$lib/constants/navigation';

	export let path = NAV.HOME;
</script>

<div class="nav-bar">
	<a class="nav-text" class:selected={path === NAV.HOME} href={NAV.HOME}>Home</a>
	<a class="nav-text" class:selected={path === NAV.BILLS} href={NAV.BILLS}>Bills</a>
	<a class="nav-text" class:selected={path === NAV.NOT_BILLS} href={NAV.NOT_BILLS}>Not Bills</a>
</div>
<slot />

<style lang="scss">
	@use 'src/styles/_colors' as *;
	@use 'src/styles/_sizes' as *;

	a {
		text-decoration: none;
	}

	.nav-bar {
		width: 100%;
		height: $h-m;
		background-color: $primary;
		display: flex;
		align-items: center;
	}
	.nav-text {
		display: inline-block;
		font-size: $f-m;
		color: $blue-50;
		padding: $spacing-s $spacing-l;
		margin: $spacing-s;
		&:hover {
			border-bottom: 1px solid black;
		}
	}
	.selected {
		border-bottom: 1px solid $teal-400;
	}
</style>
