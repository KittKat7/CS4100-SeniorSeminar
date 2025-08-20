

async function getBlogPostList(user, repo, path) {
	const folderURL = "https://api.github.com/repos/" + user + "/" + repo + "/contents/" + path;

	const data = await (await getRemoteContent(folderURL)).json();
	var list = [];
	for (var i = 0; i < data.length; i++) {
		list.push(data[i].download_url);
	}
	return list;
}

async function getRemoteContent(url) {
	var cachedContent = localStorage.getItem(url);
	try {
		if (cachedContent == null) {
			throw new Error();
		}
		var list = await JSON.parse(cachedContent);
	} catch (e) {
		return await fetch(url).then(function (response) { return response; });
	}
}

async function addBlogPosts(section, user, repo, path) {
	var postURLs = await getBlogPostList(user, repo, path);

	var section = document.getElementById(section);



	for (var i = 0; i < postURLs.length; i++) {
		const post = document.createElement("div");
		post.classList.add("blog-post");

		const postData = await (await getRemoteContent(postURLs[i])).text();

		var converter = new showdown.Converter(),
			text = postData,
			html = converter.makeHtml(text);

		post.innerHTML = html;

		section.appendChild(post);
	}
}