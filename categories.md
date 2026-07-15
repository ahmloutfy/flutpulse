---
layout: default
title: Categories
permalink: /categories/
---

<div class="container" style="max-width: 800px; margin: 40px auto; padding: 0 20px; box-sizing: border-box;">
  <h1 style="text-align: center; color: #fff; margin-bottom: 50px; font-size: 32px; font-weight: bold;">Articles by Category</h1>

  <!-- جلب الفئات تلقائياً -->
  {% for category in site.categories %}
    <div id="{{ category | first | slugify }}" style="margin-bottom: 45px; background: #121821; padding: 25px; border-radius: 10px; border: 1px solid #1e2733;">
      
      <!-- عنوان الفئة المميز -->
      <h2 style="color: #6cff6c; margin: 0 0 20px 0; border-bottom: 1px solid #263345; padding-bottom: 12px; font-size: 22px; display: flex; justify-content: space-between; align-items: center;">
        <span>📁 {{ category | first }}</span>
        <span style="color: #666; font-size: 14px; font-weight: normal; background: #0b0f14; padding: 3px 10px; border-radius: 12px;">
          {{ category | last | size }} {% if category | last | size == 1 %}Article{% else %}Articles{% endif %}
        </span>
      </h2>
      
      <!-- قائمة المقالات على شكل روابط نظيفة خلف بعضها -->
      <div style="display: flex; flex-direction: column; gap: 15px;">
        {% for post in category | last %}
          <a href="{{ post.url | relative_url }}" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; background: #0b0f14; border: 1px solid #1e2733; border-radius: 6px; text-decoration: none; transition: 0.2s ease-in-out;" onmouseover="this.style.borderColor='#6cff6c'; this.style.transform='translateX(4px)';" onmouseout="this.style.borderColor='#1e2733'; this.style.transform='translateX(0)';">
            
            <!-- عنوان المقال -->
            <span style="color: #fff; font-size: 16px; font-weight: 500; text-align: left; padding-right: 15px;">
              📄 {{ post.title }}
            </span>
            
            <!-- تاريخ النشر -->
            <span style="color: #666; font-size: 13px; font-family: monospace; white-space: nowrap;">
              {{ post.date | date: "%b %d, %Y" }} →
            </span>
            
          </a>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>
