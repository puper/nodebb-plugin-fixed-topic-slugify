
const plugin = {};
plugin.topicCreate = (topicData) => {
    topicData.topic.slug = `${topicData.topic.tid}/topic`;
    console.log(topicData.topic.slug);
    return topicData;
}
plugin.topicEdit = (topicData) => {
    topicData.topic.slug = `${topicData.topic.tid}/topic`;
    console.log(topicData.topic.slug);
    return topicData;
}
module.exports = plugin;
