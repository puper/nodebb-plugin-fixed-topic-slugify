
const plugin = {};
plugin.topicCreate = (topicData) => {
    topicData.topic.slug = `${topicData.topic.tid}/posts`;
    return topicData;
}
plugin.topicEdit = (topicData) => {
    topicData.topic.slug = `${topicData.topic.tid}/posts`;
    return topicData;
}
module.exports = plugin;
