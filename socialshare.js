var socialshare = {

    init: function () {
        socialshare.bindEvents();
    },

    bindEvents: function() {
        $('.facebook-share').click(function() {
            socialshare.shareFacebook($(this).data('share-link'), $(this).data('share-caption'));
            return false;
        });

        $('.twitter-share').click(function() {
            socialshare.shareTwitter($(this).data('share-text'));
            return false;
        });
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
    }

};

// Initialize on DOM ready
$(socialshare.init);