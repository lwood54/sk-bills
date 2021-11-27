<div class="card">
	<slot />
</div>

<style lang="scss">
	@use 'src/styles/_colors' as *;
	@use 'src/styles/_sizes' as *;
	$cc: var(--card-color);

	.card {
		display: flex;
		box-sizing: border-box;
		flex-wrap: wrap;
		width: $w-s;
		height: auto;
		background-color: var(--card-color, $primary);
	}
</style>
