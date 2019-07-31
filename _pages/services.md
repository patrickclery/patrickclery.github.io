---
permalink: /services/
layout: splash
---

<style type="text/css">
@media print {
  .pagebreak {page-break-before: always;}
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.item {
  background: #eee;
  padding: 15px;
}

</style>

{% include skills/intro.md %}
***
<div class="pagebreak"></div>

<div class="skills">
<div class="item" markdown="1">
{% include skills/web_development.md %}
</div>
<div class="item" markdown="1">
{% include skills/ui_design.md %}
</div>
<div class="item" markdown="1">
{% include skills/dev_ops.md %}
</div>
</div>

***
<div class="pagebreak"></div>
{% include skills/portfolio.md %}

***
<div class="pagebreak"></div>
{% include skills/accomplishments.md %}

***
<div class="pagebreak"></div>
{% include skills/contact_me.md %}
