---
layout: default
title: "Contact FlutPulse"
permalink: /contact/
no_ads: true
---

<div class="about-container" style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: 'Poppins', sans-serif; color: #ffffff;">
  <div style="text-align: center; margin-bottom: 30px;">
    <img src="{{ '/flutpulse_logo.png' | relative_url }}"
         alt="FlutPulse Logo"
         style="max-width: 140px; margin-bottom: 18px;">
    <h1 style="font-size: 2.4rem; font-weight: 700; margin-bottom: 10px;">
      Contact <span style="color: #FFDE59;">FlutPulse</span>
    </h1>
    <p style="font-size: 1.05rem; color: #a0aec0; max-width: 620px; margin: 0 auto; line-height: 1.7;">
      Have a Flutter question, suggestion, or collaboration idea? Send a message and we'll get back to you by email.
    </p>
  </div>

  <div style="background: #121821; border: 1px solid #263345; border-radius: 12px; padding: 24px;">
    <form action="https://formspree.io/f/your-form-id"
          method="POST"
          style="display: grid; gap: 16px;">
      <input type="hidden" name="_subject" value="New Contact Message - FlutPulse">
      <input type="hidden" name="_next" value="{{ '/contact/thanks/' | absolute_url }}">

      <label for="name" style="font-weight: 600; color: #d6dee9;">Name</label>
      <input id="name"
             name="name"
             type="text"
             required
             style="padding: 12px 14px; border-radius: 8px; border: 1px solid #304055; background: #0b0f14; color: #ffffff;">

      <label for="email" style="font-weight: 600; color: #d6dee9;">Email</label>
      <input id="email"
             name="email"
             type="email"
             required
             style="padding: 12px 14px; border-radius: 8px; border: 1px solid #304055; background: #0b0f14; color: #ffffff;">

      <label for="message" style="font-weight: 600; color: #d6dee9;">Message</label>
      <textarea id="message"
                name="message"
                rows="7"
                required
                style="padding: 12px 14px; border-radius: 8px; border: 1px solid #304055; background: #0b0f14; color: #ffffff; resize: vertical;"></textarea>

      <button type="submit"
              style="margin-top: 6px; border: none; cursor: pointer; padding: 12px 18px; border-radius: 8px; font-weight: 700; color: #1a202c; background: linear-gradient(90deg, #7ED957, #FFDE59);">
        Send Message
      </button>
    </form>
  </div>

  <p style="text-align: center; margin-top: 16px; color: #9ca9bb; font-size: 0.95rem;">
    To activate this form, replace <code style="color:#FFDE59;">your-form-id</code> with your Formspree form ID.
    You can also email us directly at <a href="mailto:flutpulse@proton.me" style="color:#7ED957;">flutpulse@proton.me</a>.
  </p>
</div>
