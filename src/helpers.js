function removeURLFromString(string) {
	return string.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
}