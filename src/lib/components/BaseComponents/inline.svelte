<div class="inline">
	<slot />
</div>

<style lang="scss">
	@use 'src/styles/_sizes' as *;
	.inline {
		display: flex;
		width: $w-full;
		flex-direction: row;
		flex-wrap: var(--flex-wrap);
	}
</style>
