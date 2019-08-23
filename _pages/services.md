---
permalink: /services/
layout: splash
classes: wide
title: Patrick Clery
excerpt: Full-Stack Web Developer
header:
  overlay_image: assets/images/sitting-at-desk.jpg
  overlay_filter: 0.75
---

<div class="skills">
{% assign skills = site.skills | sort: 'order' %}
{% for skill in skills %}
{% include skill.html skill=skill %}
{% endfor %}
</div>

***
<div class="pagebreak"></div>
{% include vertical-timeline.html %}

***

***

<div class="pagebreak"></div>
<div class="portfolio">
{% assign portfolio = site.portfolio | sort: 'order' %}
{% for project in portfolio %}
{% include project.html project=project %}
{% endfor %}
</div>

***

<div class="pagebreak"></div>
{% include skills/accomplishments.md %}

***

{% include skills/contact_me.md %}
