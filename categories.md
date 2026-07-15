---
layout: default
title: Categories
permalink: /categories/
---

<div class="category-page-wrapper">
  <h1 class="category-main-title">Articles by Category</h1>

  {% for category in site.categories %}
    <!-- كل فئة تأخذ بلوك مستقل تماماً مع ID مخصص للهاش -->
    <div class="category-block" id="{{ category | first | slugify }}">
      
      <h2 class="category-header">
        <span>📁 {{ category | first }}</span>
        <span class="category-count">
          {{ category | last | size }} {% if category | last | size == 1 %}Article{% else %}Articles{% endif %}
        </span>
      </h2>
      
      <div class="category-links-list">
        {% for post in category | last %}
          <a href="{{ post.url | relative_url }}" class="category-article-item">
            <span class="article-item-title">📄 {{ post.title }}</span>
            <span class="article-item-date">{{ post.date | date: "%b %d, %Y" }} →</span>
          </a>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>
