<script></script>

<section class="Detail container mx-auto flex flex-col justify-center">
	<h2 class="z-15">UX/UI DESIGN</h2>
	<div class="detail-box flex flex-col items-center">
		<div class="box-img">
			<div class="relative flex flex-col gap-y-4">
				<img
					src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="UX/UI Design"
					class="z-10"
				/>
				<p>
					Pushing the boundaries of what's possible: We blend artistry with cutting-edge tech to
					create digital experiences that are as beautiful as they are groundbreaking.
				</p>
			</div>
			<div class="nb-slides flex flex-col">
				<span class="z-15">01</span>
				<span class="text-gray-300 z-0">05</span>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
		border: 1px solid black;
		background-color: #fbf9f7;
	}

	.detail-box {
		/* background-color: crimson; */
	}

	h2,
	.nb-slides,
	p {
		font-weight: bold;
	}

	h2,
	.nb-slides {
		font-family: 'Montserrat', sans-serif;
	}

	.box-img {
		display: flex;
		width: 70%;
		position: relative;
		left: 35px;
		/* background-color: aquamarine; */
	}

	.nb-slides {
		position: relative;
		left: -35px;
		top: -20px;
		/* background-color: chocolate; */
	}

	h2 {
		font-size: 4rem;
		line-height: 0.8;
		padding-left: 5%;
		/* background-color: coral; */
	}

	span {
		font-size: 4rem;
		line-height: 0.9;
	}

	img {
		position: relative;
		border-radius: 27px;
	}

	p {
		font-family: 'Manrope', sans-serif;
		font-size: 1rem;
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: 8rem;
		}

		span {
			font-size: 6rem;
		}

		p {
			font-size: 1.5rem;
		}
	}
</style>
