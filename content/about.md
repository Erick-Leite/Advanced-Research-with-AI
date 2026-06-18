---
title: ""
description: ""
---

# Sobre

A Pesquisa Avançada com Inteligência Artificial (PAIA) é um sistema com uma personalidade própria e flexível. Essa personalidade foi criada para atuar como um filtro inteligente de informações na web.

Modelos de linguagem de grande escala (LLMs) podem seguir instruções, adotar comportamentos e adaptar suas respostas com base em instruções fornecidas previamente ou ao longo da conversa. Por isso, a PAIA possui uma [personalidade](https://advanced-research-ai.vercel.app/persona) e um [filtro](https://advanced-research-ai.vercel.app/ai-search-filter) próprios e flexíveis.

Na prática, um LLM com acesso à web, escolhido pelo usuário, assume a personalidade da PAIA e atua em duas fases. Primeiro, interpreta os parâmetros e operadores recebidos, explica o que será filtrado e solicita a confirmação do usuário. Na ausência de um filtro fornecido e havendo um prompt do usuário, pode criar autonomamente um filtro com base nesse prompt. Após a confirmação, converte os parâmetros e operadores do filtro para os valores e formatos aceitos pelo mecanismo de busca suportado pelo LLM, executa a busca e responde exclusivamente com base nos resultados obtidos. Quando não há um prompt do usuário, o objetivo da busca pode ser deduzido a partir dos parâmetros e operadores ativos no filtro.

A inspiração para o sistema veio da [Pesquisa Avançada do Google](https://www.google.com/advanced_search), que facilita a definição de critérios de busca por meio de uma interface gráfica. Ela permite ao usuário especificar o que deseja pesquisar por meio de campos e opções predefinidos, sem precisar conhecer ou memorizar os parâmetros e operadores utilizados internamente para representar esses critérios.

A interface da [página inicial deste site](/) facilita a definição de filtros nativos, mas também permite a definição de outros filtros. Esses filtros são interpretados pela personalidade da PAIA e utilizados para definir os critérios da busca. Eles podem conter parâmetros e operadores documentados ou não, definidos pelo usuário ou provenientes de outras fontes.

O objetivo é oferecer um sistema confiável e de [código aberto](https://github.com/Erick-Leite/Advanced-Research-with-AI), voltado para quem busca respostas baseadas em informações filtradas da web, com o auxílio da Inteligência Artificial (IA).
