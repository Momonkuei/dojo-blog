<template>
	<h1>home</h1>
	<div v-if="error">{{ error }}</div>
	<div v-if="posts.length" class="layout">
		<post-list :posts="posts"></post-list>
		<tag-cloud :posts="posts"></tag-cloud>
	</div>
	<div v-else>
		<spinner></spinner>
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import getPosts from '@/composable/getPosts';
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';

export default {
	name: 'Home',
	components: {
		PostList,
		Spinner,
		TagCloud,
	},
	setup() {
		const { posts, error, load } = getPosts();
		load();
		return { posts, error };
	},
};
</script>

<style>
.home {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}

.layout {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 20px;
}
</style>
