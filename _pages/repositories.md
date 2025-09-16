---
layout: page
permalink: /repositories/
title: Технологии
description: Мы придерживаемся идеологии коллаборативной разработки и, разумеется, опираемся на open-source технологии. Более того, мы стараемся отправлять обратно в upstream всё, что можем, насколько это возможно в нынешних условиях. Поэтому мы не считаем возможным обойти вниманием технологии, которые используем в качестве основы. Все мы перечислить не сможем, но постараемся подсветить самые важные (в том числе и технологии, которые заопенсорсили сами).
nav: false
---


## Репозитории исходного кода, которые важны для наших решений

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% if site.data.repositories.github_users %}
{% endif %}
