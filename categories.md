---
layout: null
title: Categories
permalink: /categories/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Categories | FlutPulse</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #0b0f14;
      color: #fff;
      padding: 0;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      border-bottom: 1px solid #222;
      background: #0b0f14;
    }
    nav img { height: 60px; }
    nav a {
      color: #ccc;
      margin-left: 20px;
      text-decoration: none;
      font-weight: 500;
      transition: 0.3s;
    }
    nav a:hover { color: #6cff6c; }
    
    .category-page-wrapper {
      max-width: 800px;
      margin: 60px auto;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .category-main-title {
      text-align: center;
      color: #ffffff;
      margin-bottom: 40px;
      font-size: 32px;
      font-weight: bold;
    }
    .category-block {
      background: #121821;
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #1e2733;
      margin-bottom: 35px;
      display: block;
    }
    .category-header {
      color: #6cff6c;
      margin: 0 0 20px 0;
      border-bottom: 1px solid #263345;
      padding-bottom: 12px;
      font-size: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .category-count {
      color: #888888;
      font-size: 14px;
      font-weight: normal;
      background: #0b0f14;
      padding: 4px 12px;
      border-radius: 6px;
    }
    .category-links-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .category-article-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #0b0f14;
      border: 1px solid #1e2733;
      border-radius: 6px;
      text-decoration: none !important;
      transition: all 0.2s ease;
    }
    .category-article-item:hover {
      border-color: #6cff6c;
      background: #161f2b;
    }
    .article-item-title {
      color: #ffffff !important;
      font-size: 16px;
      font-weight: bold;
    }
    .article-item-date {
      color: #a0a0a0 !important;
      font-size: 13px;
      font-family: monospace;
    }
    footer { 
      background: #05080c; 
      padding: 30px; 
      text-align: center; 
      color: #aaa; 
      margin-top: 60px; 
      border-top: 1px solid #222;
    }
    footer a { color: #6cff6c; text-decoration: none; }
  </style>
</head>
<body>

<nav>
  <a href="{{ site.baseurl }}/">
    <img src="{{ '/flutpulse_logo.png' | relative_url }}" alt="FlutPulse Logo" style="height: 80px;">
  </a>
  <div>
    <a href="{{ site.baseurl }}/">Home</a>
    <a href="{{ site.baseurl }}/categories/">Categories</a>
    <a href="{{ site.baseurl }}/about/">About</a>
    <a href="{{ site.baseurl }}/privacy_policy/">Privacy Policy</a>
  </div>
</nav>

<div class="category-page-wrapper">
  <h1 class="category-main-title">Articles by Category</h1>

  {% for category in site.categories %}
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
            
            <!-- محاولة جلب عنوان المقال بـ 3 طرق مختلفة لضمان القراءة بالقوة -->
            <span class="article-item-title">
              📄 
              {% if post.title and post.title != "" %}
                {{ post.title }}
              {% elsif post.slug and post.slug != "" %}
                {{ post.slug | replace: "-", " " | capitalize }}
              {% else %}
                View Published Article
              {% endif %}
            </span>
            
            <!-- عرض تاريخ النشر أو سهم الانتقال الصريح -->
            <span class="article-item-date">
              {% if post.date %}
                {{ post.date | date: "%b %d, %Y" }}
              {% endif %}
              <span style="color: #6cff6c; margin-left: 8px;">Read →</span>
            </span>

          </a>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>

<footer>
  <p>&copy; 2026 FlutPulse. All rights reserved. Built with Jekyll.</p>
</footer>

</body>
</html>
