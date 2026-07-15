---
layout: default
title: Categories
permalink: /categories/
---

<div class="container" style="max-width: 800px; margin: 40px auto; padding: 0 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <h1 style="text-align: center; color: #ffffff !important; margin-bottom: 50px; font-size: 32px; font-weight: bold; border: none !important;">Articles by Category</h1>

  {% for category in site.categories %}
    <div id="{{ category | first | slugify }}" style="margin-bottom: 40px; background: #121821; padding: 25px; border-radius: 8px; border: 1px solid #1e2733; display: block;">
      
      <!-- عنوان الفئة -->
      <h2 style="color: #6cff6c !important; margin: 0 0 20px 0; border-bottom: 1px solid #263345; padding-bottom: 12px; font-size: 22px; display: flex; justify-content: space-between; align-items: center; border-top: none !important; border-left: none !important; border-right: none !important;">
        <span style="color: #6cff6c !important;">📁 {{ category | first }}</span>
        <span style="color: #888888 !important; font-size: 14px; font-weight: normal; background: #0b0f14; padding: 4px 12px; border-radius: 6px; display: inline-block;">
          {{ category | last | size }} {% if category | last | size == 1 %}Article{% else %}Articles{% endif %}
        </span>
      </h2>
      
      <!-- قائمة الروابط المستقرة برمجياً وبصرياً -->
      <div style="display: block; width: 100%;">
        {% for post in category | last %}
          <a href="{{ post.url | relative_url }}" style="display: block; padding: 14px 20px; background: #0b0f14; border: 1px solid #1e2733; border-radius: 6px; text-decoration: none !important; margin-bottom: 12px; transition: all 0.2s ease-in-out; color: #ffffff !important;" onmouseover="this.style.borderColor='#6cff6c'; this.style.background='#161f2b';" onmouseout="this.style.borderColor='#1e2733'; this.style.background='#0b0f14';">
            
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; color: #ffffff !important;">
              <!-- عنوان المقال -->
              <span style="color: #ffffff !important; font-size: 16px; font-weight: 600; text-align: left; text-decoration: none !important;">
                📄 {{ post.title }}
              </span>
              
              <!-- السهم والتاريخ -->
              <span style="color: #a0a0a0 !important; font-size: 13px; font-family: monospace; white-space: nowrap; padding-left: 15px;">
                {{ post.date | date: "%b %d, %Y" }} <span style="color: #6cff6c !important; margin-left: 5px;">→</span>
              </span>
            </div>
            
          </a>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>
