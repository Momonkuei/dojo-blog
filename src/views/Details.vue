<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="post" class="post">
		<h3>{{ post.title }}</h3>
		<p class="pre">{{ post.body }}</p>
		<button @click="handClick" class="delete">delete post</button>
	</div>
	<div v-else>
		<spinner></spinner>
	</div>
</template>

<script>
import getPost from '@/composable/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';

export default {
	props: ['id'],
	components: { Spinner },
	setup(props) {
		// console.log(props.id);
		const route = useRoute();
		const router = useRouter();
		const { post, error, load } = getPost(route.params.id);

		load();

		const handClick = async () => {
			await projectFirestore.collection('posts').doc(props.id).delete();
			router.push({ name: 'Home' });
		};

		return {
			post,
			error,
			handClick,
		};
	},
};
</script>

<style lang="scss">
.post {
	max-width: 1200px;
	margin: 0 auto;
	p {
		color: #444;
		line-height: 1.5em;
		margin-top: 40px;
	}

	.pre {
		white-space: pre-wrap;
	}
}
button {
	&.delete {
		margin: 10px auto;
	}
}
</style>
