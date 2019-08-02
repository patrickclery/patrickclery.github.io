---
permalink: /services/
layout: splash
classes: wide
excerpt: Ruby on Rails + HTML/CSS + Linux + everything tech
title: Patrick Clery
header:
  overlay_image: assets/images/sitting-at-desk.jpg
  overlay_filter: 0.75
---

<div class="pagebreak"></div>

# Web Development Skills

<div class="skills">
{% assign skills = site.skills | sort: 'order' %}
{% for skill in skills %}
{% include skill.html skill=skill %}
{% endfor %}
</div>

***
{% include portfolio/knowyourfish.html %}

***

<div class="pagebreak"></div>
{% include skills/contact_me.md %}
