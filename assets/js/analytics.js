window.FlutPulseAnalytics = {

    articleView(title) {
        gtag('event', 'article_view', {
            article_title: title
        });
    },


    articleComplete(title) {
        gtag('event', 'article_complete', {
            article_title: title
        });
    }

};

document.addEventListener("DOMContentLoaded", () => {

    if (!window.articleTitle)
        return;

    let completed = false;

    window.addEventListener("scroll", () => {

        if (completed)
            return;

        const scrollPosition =
            window.scrollY + window.innerHeight;

        const documentHeight =
            document.documentElement.scrollHeight;

        const progress =
            scrollPosition / documentHeight;

        if (progress >= 0.9) {

            completed = true;

            FlutPulseAnalytics.articleComplete(window.articleTitle);

        }

    });

});