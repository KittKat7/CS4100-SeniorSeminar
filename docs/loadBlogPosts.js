

async function getBlogPostList(user, repo, path) {
	const folderURL = "./contentindex.txt";

	const data = await (await getRemoteContent(folderURL)).text();
	const contentList = data.split("\n");
	var list = [];
	for (var i = 0; i < contentList.length; i++) {
		if (contentList[i].length == 0) {
			continue;
		}
		list.push(contentList[i]);
	}
	console.log(list);
	return list;
}

async function getRemoteContent(url) {
	return await fetch(url, { cache: "no-store" }).then(function (response) { return response; });
}

async function addBlogPosts(section, user, repo, path) {
	var postURLs = await getBlogPostList(user, repo, path);

	var section = document.getElementById(section);



	for (var i = 0; i < postURLs.length; i++) {
		const post = document.createElement("div");
		post.classList.add("blog-post");

		const postData = await (await getRemoteContent("../posts/" + postURLs[i])).text();

		var converter = new showdown.Converter(),
			text = postData,
			html = converter.makeHtml(text);

		post.innerHTML = html;

		section.appendChild(post);
	}
}