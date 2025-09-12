---
layout: page
permalink: /repositories/
title: Технологии
description: Мы придерживаемся идеологии коллаборитивной разработки и разумеется опираемся на open-source технологии. Более того, всё что мы можем, мы стараемся отправлять обратно в upstream, насколько это возможно в нынешних условиях. Поэтому мы не можем обойти вниманием технологии, которые используем в качестве основы. Все мы перечислить не можем, но постараемся подсветить самые важные (в том числе и технологии, которые заопенсорсили сами)
nav: true
nav_order: 4
---
{% if site.data.repositories.github_users %}

## Репозитории исходного кода, которые важны для нашего решения

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
