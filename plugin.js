/**
 * Created by Nicolas on 6/19/15.
 */
(function (Plugin) {
    'use strict';
    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            topicCreate: function (topicData, callback) {
                topicData.topic.slug = `${topicData.tid}/topic`;
                callback(null, topicData);
            },

            topicEdit: function (topicData, callback) {
                topicData.slug = `${topicData.tid}/topic`;
                callback(null, topicData);
            }
        }
    };

})(module.exports);
