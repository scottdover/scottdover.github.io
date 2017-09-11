---
layout: base
title: "Kind words"
published: true
unlisted: true
---
These are a selection of kind words from my colleagues at Research Square

{% for quote in site.data.quotes %}
> {{ quote }}
{% endfor %}
