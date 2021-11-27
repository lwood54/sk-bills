<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		console.log('running?');
		return {
			props: {
				path: page.path
			}
		};
	}
</script>

<script lang="ts">
	import { NAV } from '$lib/constants/navigation';
	import { navigating } from '$app/stores';
	import { currentPath, fromPath } from '../stores/nav';

	navigating.subscribe((val) => {
		if (val) {
			fromPath.set(val.from.path);
			currentPath.set(val.to.path);
		}
	});
</script>

<div class="nav-bar">
	<a class="nav-text" class:selected={$currentPath === NAV.HOME} href={NAV.HOME}>Home</a>
	<a class="nav-text" class:selected={$currentPath === NAV.BILLS} href={NAV.BILLS}>Bills</a>
	<a class="nav-text" class:selected={$currentPath === NAV.NOT_BILLS} href={NAV.NOT_BILLS}
		>Not Bills</a
	>
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
		color: $blue50;
		padding: $spacing-s $spacing-l;
		margin: $spacing-s;
		border-bottom: 1px solid $primary;
		&:hover {
			border-bottom: 1px solid $secondary;
		}
	}
	.selected {
		border-bottom: 1px solid $teal400;
	}
</style>
