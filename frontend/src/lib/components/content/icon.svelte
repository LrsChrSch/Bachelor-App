<script lang="ts">
	import twoD from '$lib/icons/2D.svg?src';
	import threeD from '$lib/icons/3D.svg?src';
	import Bin from '$lib/icons/Bin.svg?src';
	import Bookmark from '$lib/icons/Bookmark.svg?src';
	import BookmarkAdded from '$lib/icons/Bookmark_Added.svg?src';
	import Category from '$lib/icons/Category.svg?src';
	import Chapter from '$lib/icons/Chapter.svg?src';
	import Close from '$lib/icons/Close.svg?src';
	import Combine from '$lib/icons/Combine.svg?src';
	import Compare from '$lib/icons/Compare.svg?src';
	import End from '$lib/icons/End.svg?src';
	import Evaluate from '$lib/icons/Evaluate.svg?src';
	import Expand from '$lib/icons/Expand.svg?src';
	import Graph from '$lib/icons/Graph.svg?src';
	import Home from '$lib/icons/Home.svg?src';
	import Human from '$lib/icons/Human.svg?src';
	import Left from '$lib/icons/Left.svg?src';
	import Previous from '$lib/icons/Previous.svg?src';
	import Rebuild from '$lib/icons/Rebuild.svg?src';
	import Reply from '$lib/icons/Reply.svg?src';
	import ResetView from '$lib/icons/ResetView.svg?src';
	import Right from '$lib/icons/Right.svg?src';
	import Robot from '$lib/icons/Robot.svg?src';
	import Search from '$lib/icons/Search.svg?src';
	import Send from '$lib/icons/Send.svg?src';
	import Upload from '$lib/icons/Upload.svg?src';
	import Visualization from '$lib/icons/Visualization.svg?src';
	import Websocket from '$lib/icons/Websocket.svg?src';

	export let name: string;
	export let size: string = '';
	export let classes: string = '';

	interface Lookup {
		[key: string]: string;
	}

	const logos: Lookup = {
		twoD: twoD,
		threeD: threeD,
		bin: Bin,
		bookmark: Bookmark,
		bookmarkAdded: BookmarkAdded,
		category: Category,
		chapter: Chapter,
		close: Close,
		combine: Combine,
		compare: Compare,
		end: End,
		evaluate: Evaluate,
		expand: Expand,
		graph: Graph,
		home: Home,
		human: Human,
		left: Left,
		previous: Previous,
		rebuild: Rebuild,
		reply: Reply,
		resetView: ResetView,
		right: Right,
		robot: Robot,
		search: Search,
		send: Send,
		upload: Upload,
		visualization: Visualization,
		websocket: Websocket
	};

	const sizes: Lookup = {
		xs: '14',
		s: '16',
		m: '24',
		l: '32',
		xl: '36'
	};

	$: size = size || 'm';
	$: classes = classes || '';
</script>

{@html logos[name]
	.replace('width="24"', 'width="' + sizes[size] + '"')
	.replace('height="24"', 'height="' + sizes[size] + '"')
	.replace('<svg ', '<svg class="' + classes + '" ')}
