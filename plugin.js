/**
 * Created by Nicolas on 6/19/15.
 */
(function (Plugin) {
    'use strict';
    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            topicCreate: function (topicData) {
                topicData.topic.slug = `${topicData.topic.tid}/topic`;
                console.log(topicData.topic.slug);
                //callback(null, topicData);
                return topicData;
            },

            topicEdit: function (topicData) {
                topicData.slug = `${topicData.topic.tid}/topic`;
                //callback(null, topicData);
                console.log(topicData.topic.slug);
                return topicData;
            }
        }
    };

})(module.exports);
