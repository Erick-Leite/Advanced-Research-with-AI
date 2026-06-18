---
title: AI Search Filter — Pesquisa Avançada com Inteligência Artificial (PAIA)
description: Documentação do campo `AI Search Filter`, uma representação textual e simplificada de filtros de pesquisa avançada projetados para serem interpretados por sistemas de Inteligência Artificial (IA).
---

# O que é o campo AI Search Filter?

O campo `AI Search Filter` é uma representação textual e simplificada de filtros de pesquisa avançada projetados para serem interpretados por sistemas de Inteligência Artificial (IA).

Sua criação foi inspirada no Google Dorking (ou Google Hacking) e na pesquisa refinada do Google. No entanto, diferentemente dos operadores tradicionais do Google, seus parâmetros foram projetados especificamente para serem analisados e interpretados por sistemas de IA.

O objetivo do `AI Search Filter` é fornecer uma sintaxe padronizada, legível e flexível, que possa ser utilizada tanto por pessoas quanto por sistemas automatizados.

> O `AI Search Filter` define apenas uma forma de representar filtros de pesquisa. Regras de validação, restrições e comportamentos específicos podem ser definidos por instruções complementares fornecidas ao sistema de IA.

---

## Escopo desta documentação

Esta documentação define apenas a sintaxe e o significado dos parâmetros documentados do campo `AI Search Filter`.

Regras de validação, restrições, obrigatoriedades e comportamentos específicos podem ser definidos por instruções complementares fornecidas ao sistema de IA.

Por "instruções complementares", entende-se qualquer instrução que esteja fora desta documentação, incluindo, entre outras:

- instruções fornecidas antes ou depois desta página;
- regras definidas pelo usuário;
- personas ou perfis de comportamento;
- documentações adicionais;
- orientações específicas sobre como interpretar ou utilizar o campo `AI Search Filter`.

Em caso de conflito, as instruções complementares têm prioridade sobre esta documentação.

---

## Semelhança com a pesquisa refinada do Google

O `AI Search Filter` compartilha diversos conceitos com a [pesquisa refinada do Google](https://support.google.com/websearch/answer/2466433?hl=pt-PT).

A principal diferença está na sintaxe. Enquanto o Google utiliza operadores especiais, como aspas (`"`), hífen (`-`), `site:`, `filetype:` e outros, o `AI Search Filter` utiliza pares no formato:

```text
parâmetro=valor
```

Esse formato foi projetado para ser mais estruturado e previsível para sistemas de IA.

### Exemplo comparativo

**Cenário:** buscar documentos sobre "segurança da informação" que contenham a frase exata "gestão de riscos", em sites internacionais, apenas em formato PDF, publicados a partir de 1º de janeiro de 2024 e antes de 1º de janeiro de 2027, excluindo conteúdos introdutórios.

**Pesquisa refinada do Google:**

```text
segurança da informação "gestão de riscos" -introdução site:com filetype:pdf after:2024/01/01 before:2027/01/01
```

**Campo AI Search Filter:**

```text
q=segurança da informação epq=gestão de riscos eq=introdução s=com ft=pdf fd=2024-01-01 bd=2027-01-01
```

O exemplo acima demonstra como o mesmo conjunto de filtros pode ser representado por meio de uma sintaxe mais padronizada.

---

## Sintaxe geral

Salvo instruções complementares em contrário, todos os parâmetros do campo `AI Search Filter` são opcionais.

O campo consiste em uma sequência de pares no formato:

```text
parâmetro=valor
```

Os pares são separados por espaços.

Como o valor de um parâmetro pode conter múltiplas palavras (por exemplo, `q=segurança da informação`), esse valor se estende até a próxima ocorrência de um parâmetro reconhecido na [Tabela de mapeamento de parâmetros](#tabela-de-mapeamento-de-parâmetros), ou outro definido por instruções complementares, imediatamente seguida do sinal de igual (`=`). Por exemplo, em `q=segurança da informação epq=gestão de riscos`, o valor do parâmetro `q` é "segurança da informação", pois se estende até o início de `epq=`.

Salvo instruções complementares em contrário, a ordem dos parâmetros não altera o significado do filtro.

### Exemplo completo

O exemplo a seguir combina todos os parâmetros documentados na [Tabela de mapeamento de parâmetros](#tabela-de-mapeamento-de-parâmetros):

```text
q=segurança da informação epq=gestão de riscos eq=introdução s=com ft=pdf fd=2024-01-01 bd=2027-01-01 l=pt r=BR es=qconcursos.com
```

### Interpretação do exemplo

Buscar documentos:

- sobre "segurança da informação";
- que contenham a frase exata "gestão de riscos";
- publicados em sites internacionais (`.com`);
- relacionados ao Brasil;
- escritos em português;
- disponíveis apenas em formato PDF;
- publicados ou atualizados em **1º de janeiro de 2024 ou depois**;
- publicados ou atualizados **antes de 1º de janeiro de 2027**;
- excluindo resultados que contenham "introdução";
- excluindo resultados do domínio `qconcursos.com`.

---

## Flexibilidade e interpretação por IA

O `AI Search Filter` foi projetado para ser interpretado por sistemas de Inteligência Artificial.

Esta documentação descreve apenas os parâmetros conhecidos apresentados na [Tabela de mapeamento de parâmetros](#tabela-de-mapeamento-de-parâmetros).

Salvo instruções complementares em contrário, o campo também pode conter:

- parâmetros/operadores não documentados, como `filter=`, `linkSite=` ou `num=`;
- operadores de mecanismos de busca, como `site:`, `filetype:`, `OR` e `-palavra`;
- parâmetros/operadores definidos pelo usuário.

A existência de parâmetros/operadores não documentados não implica que eles sejam válidos ou obrigatórios. Sua interpretação, validação e significado dependem das instruções complementares fornecidas ao sistema.

A interpretação de parâmetros/operadores extras é definida pelo campo opcional **`AI Extra Search Filter`**, ou por outro campo indicado por instruções complementares para essa função. Os valores desses campos, bem como seu tipo e sua origem, precisam apenas ser compatíveis com o sistema de IA, salvo instruções complementares em contrário. Essas informações também podem ser fornecidas por meio de arquivo(s) enviado(s) pelo usuário, salvo instruções complementares em contrário.

---

## Identificadores fixos

Os nomes dos campos são **identificadores fixos** e nunca devem ser traduzidos, parafraseados ou alterados, salvo instruções complementares em contrário. Essa regra garante consistência e previsibilidade na interpretação dos filtros por sistemas de IA.

---

## Tabela de mapeamento de parâmetros

A tabela abaixo descreve os parâmetros documentados do campo `AI Search Filter`.

| Parâmetro  | Nome técnico                                 | Significado                                                                                                                           | Exemplo                     |
| ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **`q=`**   | Query (Consulta)                             | Busca por palavras-chave ou termos livres.                                                                                            | `q=segurança da informação` |
| **`epq=`** | Exact Phrase Query (Consulta de Frase Exata) | Busca por uma sequência exata de palavras, respeitando sua ordem.                                                                     | `epq=acesso negado`         |
| **`eq=`**  | Exclude Query (Consulta de Exclusão)         | Exclui palavras ou expressões específicas dos resultados.                                                                             | `eq=introdução`             |
| **`s=`**   | Site                                         | Restringe os resultados a um domínio, subdomínio ou site específico.                                                                  | `s=gov.br`                  |
| **`es=`**  | Exclude Site (Excluir Site)                  | Exclui um domínio, subdomínio ou site específico dos resultados.                                                                      | `es=qconcursos.com`         |
| **`ft=`**  | File Type (Tipo de Arquivo)                  | Restringe os resultados a determinados formatos de arquivo.                                                                           | `ft=pdf`                    |
| **`fd=`**  | From Date (A partir da Data)                 | Exibe apenas resultados publicados ou atualizados na data informada ou depois dela, no formato `YYYY-MM-DD` (ISO 8601).               | `fd=2024-01-01`             |
| **`bd=`**  | Before Date (Antes da Data)                  | Exibe apenas resultados publicados ou atualizados antes da data informada, sem incluir essa data, no formato `YYYY-MM-DD` (ISO 8601). | `bd=2027-01-01`             |
| **`l=`**   | Language (Linguagem)                         | Restringe os resultados a um idioma específico, utilizando códigos ISO 639-1 (`pt`, `en` etc.).                                       | `l=pt`                      |
| **`r=`**   | Region (Região)                              | Restringe os resultados a páginas hospedadas ou relacionadas a um país ou região específica, utilizando códigos ISO 3166-1 Alpha-2.   | `r=BR`                      |

---

## Observações importantes para sistemas de IA

Ao interpretar um campo `AI Search Filter`, sistemas de IA devem considerar que:

1. esta documentação define apenas a sintaxe e o significado dos parâmetros documentados;
2. o valor de um parâmetro se estende até a próxima ocorrência de um parâmetro reconhecido, mesmo quando contém múltiplas palavras;
3. regras de validação, restrições e comportamentos específicos podem ser definidos por instruções complementares;
4. parâmetros/operadores desconhecidos não devem ser automaticamente considerados inválidos;
5. a ausência de um parâmetro não implica erro;
6. parâmetros/operadores externos ou personalizados podem existir;
7. instruções complementares têm prioridade sobre esta documentação.
