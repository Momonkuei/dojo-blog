<template>
	<div class="tag">
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<post-list :posts="postsWithTag"> </post-list>
			<tag-cloud :posts="posts"></tag-cloud>
		</div>
		<div v-else>
			<spinner></spinner>
		</div>
	</div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import getPosts from '@/composable/getPosts';
import Spinner from '@/components/Spinner.vue';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

export default {
	components: { PostList, Spinner, TagCloud },
	props: ['tag'],
	setup() {
		const tag = ref('');
		const route = useRoute();
		// console.log(route.params.tag);

		// 監聽路由變化
		watch(
			() => route.params.tag,
			newTag => {
				tag.value = newTag;
			}
		);

		tag.value = route.params.tag;

		const { posts, error, load } = getPosts();
		load();

		const postsWithTag = computed(() => {
			return posts.value.filter(post => post.tags.includes(tag.value));
		});

		return {
			posts,
			error,
			postsWithTag,
		};
	},
};
</script>

<style>
.tag {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}
</style>
