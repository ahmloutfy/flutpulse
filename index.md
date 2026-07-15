---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-text">
    <h1>Solve. Learn. <span>Build.</span></h1>
    <p>Fix Flutter issues with clear, practical solutions.</p>
    <a href="#" class="btn btn-primary">Browse Articles</a>
    <a href="#" class="btn btn-secondary">Explore Categories</a>
  </div>
  <div class="hero-logo">
    <img src="flutpulse_logo.png" alt="FlutPulse">
  </div>
</section>

<div style="text-align: center; margin: 30px auto; max-width: 100%; padding: 0 15px; box-sizing: border-box;">
  <div style="background: #121821; padding: 15px; border-radius: 8px; border: 1px dashed #263345; display: inline-block; width: 100%; max-width: 760px; box-sizing: border-box; position: relative; overflow: hidden;">
    <span style="color: #444; font-size: 11px; display: block; margin-bottom: 8px;">Advertisement</span>
    
    <div style="width: 100%; max-width: 728px; height: 90px; margin: 0 auto; position: relative; display: flex; align-items: center; justify-content: space-between; background: #080c11; border-radius: 4px; padding: 0 20px; box-sizing: border-box;">
      
      <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
        <div style="font-size: 24px;">📈</div>
        <div>
          <div style="color: #6cff6c; font-family: monospace; font-size: 13px; font-weight: bold; letter-spacing: 0.5px;">FLUTPULSE PREMIUM LEADERBOARD</div>
          <div style="color: #666; font-size: 11px; margin-top: 2px;">Top performing horizontal placement for maximum developer engagement.</div>
        </div>
      </div>
      <div style="background: linear-gradient(90deg, #ffd84d, #6cff6c); color: #000; font-size: 10px; font-weight: bold; padding: 6px 12px; border-radius: 4px; text-transform: uppercase; white-space: nowrap;">Join Us</div>

      <ins class="adsbygoogle"
           style="display: inline-block; width: 728px; height: 90px; position: absolute; top: 0; left: 0; z-index: 10;"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="TOP_HOME_SLOT"></ins>
    </div>
  </div>
</div>

<div class="container" style="text-align: center;">
  <h2>Latest Articles</h2>
  <div class="grid">
    {% for post in site.posts %}
    <div class="card">
      {% if post.image %}
        <img src="{{ post.image | relative_url }}" class="card-img" alt="{{ post.title }}">
      {% endif %}
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url | relative_url }}" class="btn btn-primary">Read More</a>
    </div>
    {% endfor %}
  </div>
</div>

<div class="container" style="text-align: center;">
  <h2>Categories</h2>
  <div class="categories-container">
    {% for category in site.categories %}
<a href="{{ site.baseurl }}/categories/{{ category | first | slugify }}/" class="category-btn">
      {{ category | first }}
    </a>
    {% endfor %}
  </div>
</div>



<div class="container" style="text-align: center; margin-top: 40px;">
  <h2>About FlutPulse</h2>
  <p style="max-width: 600px; margin: 0 auto; color: #aaa; line-height: 1.6;">
    FlutPulse is a technical blog focused on solving real-world Flutter problems 
    with clear, practical, and developer-friendly solutions.
  </p>
</div>

<div style="text-align: center; margin: 40px auto 20px auto; max-width: 100%; padding: 0 15px; box-sizing: border-box;">
  <div style="background: #121821; padding: 15px; border-radius: 8px; border: 1px dashed #263345; display: inline-block; width: 100%; max-width: 760px; box-sizing: border-box; position: relative; overflow: hidden;">
    <span style="color: #444; font-size: 11px; display: block; margin-bottom: 8px;">Advertisement</span>
    
    <div style="width: 100%; max-width: 728px; height: 90px; margin: 0 auto; position: relative; display: flex; align-items: center; justify-content: space-between; background: #080c11; border-radius: 4px; padding: 0 20px; box-sizing: border-box;">
      
      <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
        <div style="font-size: 24px;">📊</div>
        <div>
          <div style="color: #6cff6c; font-family: monospace; font-size: 13px; font-weight: bold; letter-spacing: 0.5px;">FLUTPULSE BOTTOM AD UNIT</div>
          <div style="color: #666; font-size: 11px; margin-top: 2px;">Ready for final Google AdSense integration.</div>
        </div>
      </div>
      <div style="background: linear-gradient(90deg, #ffd84d, #6cff6c); color: #000; font-size: 10px; font-weight: bold; padding: 6px 12px; border-radius: 4px; text-transform: uppercase; white-space: nowrap;">Explore</div>

      <ins class="adsbygoogle"
           style="display: inline-block; width: 728px; height: 90px; position: absolute; top: 0; left: 0; z-index: 10;"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="BOTTOM_HOME_SLOT"></ins>
    </div>
  </div>
</div>
