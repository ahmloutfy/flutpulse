window.FlutPulseAnalytics = {

    event(name, params = {}, options = {}) {
        if (typeof window.gtag !== "function") {
            return;
        }

        window.gtag("event", name, { ...params, ...options });
    },

    articleView(title) {
        this.event("article_view", { article_title: title });
    },

    articleComplete(title) {
        this.event("article_complete", { article_title: title });
    },

    ctaClick(label, location) {
        this.event("cta_click", {
            cta_label: label,
            cta_location: location
        });
    },

    outboundClick(destination, location) {
        this.event("outbound_click", {
            destination,
            link_location: location,
            transport_type: "beacon"
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-track-cta]").forEach((link) => {
        link.addEventListener("click", () => {
            FlutPulseAnalytics.ctaClick(
                link.getAttribute("data-track-cta"),
                link.getAttribute("data-track-location") || "unknown"
            );
        });
    });

    const currentHost = window.location.hostname;
    document.querySelectorAll("a[href^='http']").forEach((link) => {
        let linkHost = "";

        try {
            linkHost = new URL(link.href).hostname;
        } catch (_) {
            return;
        }

        if (linkHost && linkHost !== currentHost) {
            link.addEventListener("click", () => {
                FlutPulseAnalytics.outboundClick(
                    link.href,
                    link.getAttribute("data-track-location") || "unknown"
                );
            });
        }
    });

    if (!window.articleTitle)
        return;

    const fireArticleView = (attempt = 0) => {
        if (typeof window.gtag === "function") {
            FlutPulseAnalytics.articleView(window.articleTitle);
            return;
        }

        if (attempt < 5) {
            setTimeout(() => fireArticleView(attempt + 1), 500);
        }
    };

    fireArticleView();

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