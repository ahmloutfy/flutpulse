---
layout: default
title: Categories
permalink: /categories/
---

<div class="container" style="max-width: 1000px; margin: 40px auto; padding: 0 20px; box-sizing: border-box;">
  <h1 style="text-align: center; color: #fff; margin-bottom: 50px; font-size: 36px;">Articles by Category</h1>

  <!-- كود جيكيل الذكي للدوران على الفئات الفعالة فقط -->
  {% for category in site.categories %}
    <div id="{{ category | first | slugify }}" style="margin-bottom: 60px; background: #121821; padding: 25px; border-radius: 12px; border: 1px solid #1e2733;">
      
      <!-- عنوان الفئة وعدد المقالات بداخله -->
      <h2 style="color: #6cff6c; margin-top: 0; border-bottom: 2px solid #263345; padding-bottom: 12px; text-transform: capitalize; display: flex; justify-content: space-between; align-items: center;">
        <span>📁 {{ category | first }}</span>
        <span style="color: #666; font-size: 15px; font-weight: normal; background: #0b0f14; padding: 4px 10px; border-radius: 20px;">
          {{ category | last | size }} {% if category | last | size == 1 %}Article{% else %}Articles{% endif %}
        </span>
      </h2>
      
      <!-- عرض المقالات التابعة لهذه الفئة داخل شبكة (Grid) -->
      <div class="grid" style="margin-top: 25px;">
        {% for post in category | last %}
          <div class="card" style="background: #0b0f14; border: 1px solid #1e2733;">
            {% if post.image %}
              <img src="{{ post.image | relative_url }}" class="card-img" alt="{{ post.title }}">
            {% endif %}
            <h3 style="color: #fff; margin: 15px;">{{ post.title }}</h3>
            <p style="color: #aaa; margin: 0 15px 15px 15px; font-size: 14px; line-height: 1.6;">{{ post.excerpt }}</p>
            <a href="{{ post.url | relative_url }}" class="btn btn-primary" style="margin: auto 15px 15px 15px; text-align: center;">Read More</a>
          </div>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>
