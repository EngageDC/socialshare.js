var socialshare = {

    init: function () {
        socialshare.bindEvents();
    },

    bindEvents: function() {
        // Share buttons
        jQuery('.facebook-share').click(function() {
            socialshare.shareFacebook(jQuery(this).data('share-link'), jQuery(this).data('share-caption'));
            return false;
        });

        jQuery('.twitter-share').click(function() {
            socialshare.shareTwitter(jQuery(this).data('share-text'));
            return false;
        });

        jQuery('.print-share').click(function() {
            socialshare.sharePrint();
            return false;
        });

        // Share counts
        if (jQuery('.facebook-share .count').length) {
            var query = 'SELECT like_count, total_count, share_count, click_count, comment_count FROM link_stat WHERE url="'+ document.location +'"';
            $.get('https://graph.facebook.com/fql?q=' + encodeURIComponent(query), function (response) {
                jQuery('.facebook-share .count').html(socialshare.formatCount(response.data[0].total_count));
            }, 'jsonp');
        }

        if (jQuery('.twitter-share .count').length) {
            $.get('http://cdn.api.twitter.com/1/urls/count.json?&url=' + encodeURIComponent(document.location), function (response) {
                jQuery('.twitter-share .count').html(socialshare.formatCount(response.count));
            }, 'jsonp');
        }
    },

    formatCount: function (count) {
        if (count > 1000) {
            return Math.ceil(count / 1000) + 'k';
        } else {
            return count;
        }
    },

    shareFacebook: function (link, caption) {
        FB.ui({
          method: 'feed',
          link: link,
          caption: caption
        }, function(response){

        });
    },

    shareTwitter: function (text) {
        window.open(
            'https://twitter.com/intent/tweet?text='+encodeURIComponent(text),
            'twitter-share-dialog',
            'width=626,height=436,top='+((screen.height - 436) / 2)+',left='+((screen.width - 626) / 2)
        );
    },

    sharePrint: function () {
      window.print();
    }

};

// Initialize on DOM ready
jQuery(socialshare.init);
