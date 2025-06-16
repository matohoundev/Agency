<script></script>

<section class="Detail container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
	<div class="Detail-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="relative z-10 text-black text-center">
			<p class="relative detail-title z-15">Un site sur-mesure, beau et rapide</p>
			<span class="detail-title-effect">Un site sur-mesure, beau et rapide</span>
		</div>
		<p class="text-center detail-subtitle text-lg">
			Avec un design impactant, une structure stratégique et un copywriting affûté.
		</p>
	</div>
</section>

<style>
	section {
		height: 100vh;
		border: 1px solid black;
		background-color: #fbf9f7;
	}

	.detail-title,
	.detail-title-effect {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 1.3;
	}

	.detail-title-effect {
		color: transparent;
		-webkit-text-stroke: 1px #000000;
		top: 2.5px;
		left: 2px;
		position: absolute;
		width: 100%;
	}

	.detail-subtitle {
		font-family: 'Manrope', sans-serif;
		line-height: 1.4;
	}

	@media screen and (min-width: 768px) {
		.detail-title-effect {
			top: 2.5px;
			left: 2px;
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-title {
			font-size: 3rem;
		}

		.detail-subtitle {
			font-size: 1.3rem;
		}
	}
</style>
