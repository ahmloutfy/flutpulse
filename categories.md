---
layout: default
title: Categories
permalink: /categories/
---

<div class="container" style="max-width: 800px; margin: 40px auto; padding: 0 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <h1 style="text-align: center; color: #ffffff !important; margin-bottom: 50px; font-size: 32px; font-weight: bold; border: none !important; background: transparent !important;">Articles by Category</h1>

  {% for category in site.categories %}
    <div id="{{ category | first | slugify }}" style="margin-bottom: 40px; background: #121821 !important; padding: 25px; border-radius: 8px !important; border: 1px solid #1e2733 !important; display: block !important;">
      
      <!-- عنوان الفئة -->
      <h2 style="color: #6cff6c !important; margin: 0 0 20px 0 !important; border-bottom: 1px solid #263345 !important; padding-bottom: 12px !important; font-size: 22px !important; display: flex !important; justify-content: space-between !important; align-items: center !important; border-top: none !important; border-left: none !important; border-right: none !important; background: transparent !important;">
        <span style="color: #6cff6c !important;">📁 {{ category | first }}</span>
        <span style="color: #888888 !important; font-size: 14px !important; font-weight: normal !important; background: #0b0f14 !important; padding: 4px 12px !important; border-radius: 6px !important; display: inline-block !important;">
          {{ category | last | size }} {% if category | last | size == 1 %}Article{% else %}Articles{% endif %}
        </span>
      </h2>
      
      <!-- قائمة الروابط المعالجة بصريا بالكامل -->
      <div style="display: block !important; width: 100% !important;">
        {% for post in category | last %}
          <a href="{{ post.url | relative_url }}" style="display: block !important; padding: 14px 20px !important; background: #0b0f14 !important; border: 1px solid #1e2733 !important; border-radius: 6px !important; text-decoration: none !important; margin-bottom: 12px !important; transition: all 0.2s ease-in-out !important; min-height: 50px !important; box-sizing: border-box !important;" onmouseover="this.style.borderColor='#6cff6c'; this.style.background='#161f2b';" onmouseout="this.style.borderColor='#1e2733'; this.style.background='#0b0f14';">
            
            <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; background: transparent !important;">
              
              <!-- نص عنوان المقال مجبر على اللون الأبيض -->
              <p style="color: #ffffff !important; font-size: 16px !important; font-weight: 600 !important; margin: 0 !important; padding: 0 !important; text-align: left !important; display: inline-block !important; background: transparent !important;">
                📄 {{ post.title }}
              </p>
              
              <!-- نص التاريخ والسهم مجبر على اللون الرمادي -->
              <p style="color: #a0a0a0 !important; font-size: 13px !important; font-family: monospace !important; margin: 0 !important; padding: 0 0 0 15px !important; white-space: nowrap !important; display: inline-block !important; background: transparent !important;">
                {{ post.date | date: "%b %d, %Y" }} <span style="color: #6cff6c !important; margin-left: 5px !important;">→</span>
              </p>
              
            </div>
            
          </a>
        {% endfor %}
      </div>

    </div>
  {% endfor %}
</div>
