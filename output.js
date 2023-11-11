 {
  content: [
    {
      id: "3f9205d0",
      settings: [],
      elements: [
        {
          id: "607ca7f9",
          settings: {
            _column_size: 100,
            _inline_size: null
          },
          elements: [],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "2c359cc9",
      settings: {
        structure: "30",
        background_color: "#00346C",
        background_color_b: "#C3D4ED"
      },
      elements: [
        {
          id: "793fdc0c",
          settings: {
            _column_size: 33,
            _inline_size: 9.04
          },
          elements: [],
          isInner: false,
          elType: "column"
        },
        {
          id: "6b3a3d61",
          settings: {
            _column_size: 33,
            _inline_size: 81.585
          },
          elements: [
            {
              id: "2f6a0eae",
              settings: {
                html: "\n<script>\n\n(function(b) {\n\nvar a = {\n\nversion: \"0.0.1\",\n\nhistory_api: typeof history.pushState !== \"undefined\",\n\ninit: function() {\n\nb.location.hash = \"#no-back\";\n\na.configure();\n\n},\n\nhasChanged: function() {\n\nif (b.location.hash == \"#no-back\") {\n\nb.location.hash = \"#\";\n\nif (b.location.search == null || b.location.search == undefined || b.location.search ==\n\n'') {\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\";\n\n} else {\n\nif (location.search.indexOf(\"src\") > -1) {\n\nvar partes = location.search.slice(1).split('&');\n\nvar data = {};\n\nvar new_search = '?';\n\npartes.forEach(function(parte) {\n\nvar chaveValor = parte.split('=');\n\nvar chave = chaveValor[0];\n\nvar valor = chaveValor[1];\n\ndata[chave] = valor;\n\n});\n\ndata.src = data.src + \"-->back_home\";\n\nnew_search += JSON.stringify(data).replace(/[{}\"]/g, \"\").replace(/[:]/g, \"=\")\n\n.replace(/[,]/g, \"&\");\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\" + new_search;\n\n} else {\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\" + b.location.search + \"&src=back_home\";\n\n}\n\n}\n\n}\n\n},\n\ncheckCompat: function() {\n\nif (b.addEventListener) {\n\nb.addEventListener(\"hashchange\", a.hasChanged, false);\n\n} else {\n\nif (b.attachEvent) {\n\nb.attachEvent(\"onhashchange\", a.hasChanged);\n\n} else {\n\nb.onhashchange = a.hasChanged;\n\n}\n\n}\n\n},\n\nconfigure: function() {\n\nif (b.location.hash == \"#no-back\") {\n\nif (this.history_api) {\n\nhistory.pushState(null, \"\", \"#\");\n\n} else {\n\n// b.location.hash = \"#\";\n\nif (b.location.search == null || b.location.search == undefined || b.location.search ==\n\n'') {\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\";\n\n} else {\n\nif (location.search.indexOf(\"src\") > -1) {\n\nvar partes = location.search.slice(1).split('&');\n\nvar data = {};\n\nvar new_search = '?';\n\npartes.forEach(function(parte) {\n\nvar chaveValor = parte.split('=');\n\nvar chave = chaveValor[0];\n\nvar valor = chaveValor[1];\n\ndata[chave] = valor;\n\n});\n\ndata.src = data.src + \"-->back_home\";\n\nnew_search += JSON.stringify(data).replace(/[{}\"]/g, \"\").replace(/[:]/g, \"=\")\n\n.replace(/[,]/g, \"&\");\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\" + new_search;\n\n} else {\n\nb.location.href = \"SEU LINK DE BACK REDIRECT\" + b.location.search + \"&src=back_home\";\n\n}\n\n}\n\n}\n\n}\n\na.checkCompat();\n\na.hasChanged();\n\n}\n\n};\n\nif (typeof define === \"function\" && define.amd) {\n\ndefine(function() {\n\nreturn a;\n\n});\n\n} else {\n\nif (typeof module === \"object\" && module.exports) {\n\nmodule.exports = a;\n\n} else {\n\nb.noback = a;\n\n}\n\n}\n\na.init();\n\n}(window));\n\n</script>\n\n\n\n,
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "html",
              elType: "widget"
            },
            {
              id: "1d3cc6b3",
              settings: {
                html: "<!-- SEU PIXEL DO FACEBOOK AQUI ABAIXO -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- LINK DO VTURB ABAIXO, NAO MEXER -->\n\n<link rel=\"preload\" href=\"https://scripts.converteai.net/53db9b40-98e8-4feb-aec1-4e2e060c4719/players/654d1c87477d4800090daf75/player.js\" as=\"script\">\n<link rel=\"preload\" href=\"https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js\" as=\"script\">\n<link rel=\"preload\" href=\"https://images.converteai.net/53db9b40-98e8-4feb-aec1-4e2e060c4719/players/654d1c87477d4800090daf75/thumbnail.jpg\" as=\"image\">\n<link rel=\"preload\" href=\"https://cdn.converteai.net/53db9b40-98e8-4feb-aec1-4e2e060c4719/651fba5891e506000979cc88/main.m3u8\" as=\"fetch\">\n<link rel=\"dns-prefetch\" href=\"https://cdn.converteai.net\">\n<link rel=\"dns-prefetch\" href=\"https://scripts.converteai.net\">\n<link rel=\"dns-prefetch\" href=\"https://images.converteai.net\">\n<link rel=\"dns-prefetch\" href=\"https://api.vturb.com.br\">,
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "html",
              elType: "widget"
            },
            {
              id: "15b3bde8",
              settings: {
                image: {
                  id: 45,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/09/Medico-Afirma-Doces-e-Carboidratos-Nao-Sao-Os-Verdadeiros-Causadores-Da-Diabetes.-8-1.jpg"
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            },
            {
              id: "6eda1a69",
              settings: {
                html: "<div id=\"vid_654d1c87477d4800090daf75\" style=\"position:relative;width:100%;padding: 56.25% 0 0;\"><img id=\"thumb_654d1c87477d4800090daf75\" src=\"https://images.converteai.net/53db9b40-98e8-4feb-aec1-4e2e060c4719/players/654d1c87477d4800090daf75/thumbnail.jpg\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;\"><div id=\"backdrop_654d1c87477d4800090daf75\" style=\"position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);\"></div></div><script type=\"text/javascript\" id=\"scr_654d1c87477d4800090daf75\">var s=document.createElement(\"script\");s.src=\"https://scripts.converteai.net/53db9b40-98e8-4feb-aec1-4e2e060c4719/players/654d1c87477d4800090daf75/player.js\",s.async=!0,document.head.appendChild(s);</script>,
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "html",
              elType: "widget"
            },
            {
              id: "24b143c2",
              settings: {
                space: {
                  unit: "px",
                  size: 18,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "spacer",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "19cd16ef",
          settings: {
            _column_size: 33,
            _inline_size: 9.039
          },
          elements: [],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "153c92b6",
      settings: {
        structure: "50",
        animation: "none",
        animation_duration: "fast",
        css_classes: "delay"
      },
      elements: [
        {
          id: "15b75c09",
          settings: {
            _column_size: 20,
            _inline_size: 9.052
          },
          elements: [],
          isInner: false,
          elType: "column"
        },
        {
          id: "67cd2bdb",
          settings: {
            _column_size: 20,
            _inline_size: 27.349
          },
          elements: [
            {
              id: "523950a",
              settings: {
                image: {
                  id: 474,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/10/Potes-Gota-Stop-5.jpg",
                  alt: "",
                  source: "library",
                  size: ""
                },
                width_mobile: {
                  unit: "%",
                  size: 85,
                  sizes: []
                },
                link_to: "custom",
                ha_advanced_tooltip_content: "I am a tooltip",
                link: {
                  url: "SEU LINK DA CAMPANHA DA BRAIP AQUI",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                }
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "3c48f78b",
          settings: {
            _column_size: 20,
            _inline_size: 27.368
          },
          elements: [
            {
              id: "644d8e7b",
              settings: {
                image: {
                  id: 57,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/09/Potes-Gota-Stop-1.jpg",
                  alt: "",
                  source: "library",
                  size: ""
                },
                width_mobile: {
                  unit: "%",
                  size: 85,
                  sizes: []
                },
                link_to: "custom",
                ha_advanced_tooltip_content: "I am a tooltip",
                link: {
                  url: "SEU LINK DA CAMPANHA DA BRAIP AQUI",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                }
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "ddb1bb5",
          settings: {
            _column_size: 20,
            _inline_size: 27.19
          },
          elements: [
            {
              id: "2033aae",
              settings: {
                image: {
                  id: 59,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/09/Potes-Gota-Stop.jpg",
                  alt: "",
                  source: "library",
                  size: ""
                },
                width_mobile: {
                  unit: "%",
                  size: 85,
                  sizes: []
                },
                link_to: "custom",
                ha_advanced_tooltip_content: "I am a tooltip",
                link: {
                  url: "SEU LINK DA CAMPANHA DA BRAIP AQUI",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                }
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "4baaa681",
          settings: {
            _column_size: 20,
            _inline_size: 9.041
          },
          elements: [],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "7982178b",
      settings: {
        structure: "30",
        background_background: "classic",
        background_color: "#F8F8F8",
        animation: "none",
        animation_duration: "fast",
        css_classes: "delay"
      },
      elements: [
        {
          id: "233e9035",
          settings: {
            _column_size: 33,
            _inline_size: 9.034
          },
          elements: [],
          isInner: false,
          elType: "column"
        },
        {
          id: "5ba487b1",
          settings: {
            _column_size: 33,
            _inline_size: 82.474
          },
          elements: [
            {
              id: "3d4356c7",
              settings: {
                space: {
                  unit: "px",
                  size: 21,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "spacer",
              elType: "widget"
            },
            {
              id: "1d5ea787",
              settings: {
                title: "100% SATISFEITO OU TRATAMENTO GRATUITO",
                align: "center",
                title_color: "#00577B",
                typography_typography: "custom",
                typography_font_family: "Rubik",
                typography_font_size: {
                  unit: "px",
                  size: 30,
                  sizes: []
                },
                typography_font_weight: "800",
                typography_line_height: {
                  unit: "em",
                  size: 1.1,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "heading",
              elType: "widget"
            },
            {
              id: "990a965",
              settings: {
                image: {
                  id: 49,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/09/90DIAS-1-1-1.png"
                },
                width: {
                  unit: "%",
                  size: 26,
                  sizes: []
                },
                width_mobile: {
                  unit: "%",
                  size: 57,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            },
            {
              id: "59f69fe2",
              settings: {
                title: "Acreditamos tanto no poder da fórmula do GOTA STOP que garantimos sua satisfação! Se em 90 dias você não notar os benefícios ou não gostar do produto basta pedir seu dinheiro de volta. Sem perguntas, sem enrolação e sem letras miúdas.",
                align: "center",
                title_color: "#222222",
                typography_typography: "custom",
                typography_font_family: "Rubik",
                typography_font_size: {
                  unit: "px",
                  size: 17,
                  sizes: []
                },
                typography_font_weight: "500",
                typography_line_height: {
                  unit: "em",
                  size: 1.4,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "heading",
              elType: "widget"
            },
            {
              id: "1e9d0fb9",
              settings: {
                space: {
                  unit: "px",
                  size: 10,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "spacer",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "579dd747",
          settings: {
            _column_size: 33,
            _inline_size: 8.158
          },
          elements: [],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "4f831f86",
      settings: {
        structure: "30",
        animation: "none",
        animation_duration: "fast",
        css_classes: "delay"
      },
      elements: [
        {
          id: "1da447b6",
          settings: {
            _column_size: 33,
            _inline_size: 9.034
          },
          elements: [],
          isInner: false,
          elType: "column"
        },
        {
          id: "7a7afaab",
          settings: {
            _column_size: 33,
            _inline_size: 82.737
          },
          elements: [
            {
              id: "5466ec02",
              settings: {
                title: "DÚVIDAS FREQUENTES",
                align: "center",
                title_color: "#00577B",
                typography_typography: "custom",
                typography_font_family: "Rubik",
                typography_font_size: {
                  unit: "px",
                  size: 30,
                  sizes: []
                },
                typography_font_weight: "800",
                typography_line_height: {
                  unit: "em",
                  size: 1.1,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "heading",
              elType: "widget"
            },
            {
              id: "7d268a8",
              settings: {
                tabs: [
                  {
                    tab_title: "O site é seguro?",
                    tab_content: "<p>Este site é 100% protegido contra recursos de má intenção. Suas informações pessoais são sigilosas segundo a nossa Política de Privacidade e a entrega é garantida! O GOTA STOP é vendido diariamente para pessoas de todo o Brasil.</p>",
                    _id: "b73e5ab"
                  },
                  {
                    tab_title: "Qual o prazo de entrega?",
                    tab_content: "<p>O prazo médio de entrega para o Brasil é de 1 a 10 dias úteis. O produto só é enviado após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do seu pagamento do boleto. Lembrando que estamos com promoção de FRETE GRÁTIS por tempo limitado e a compra no cartão acelera o processamento do seu pedido.</p>",
                    _id: "5a25431"
                  },
                  {
                    tab_title: "Por quanto tempo devo utilizar?",
                    tab_content: "<p>Recomendamos o uso por no mínimo 3 meses para obter os melhores resultados, e todos os efeitos do composto. Pode também, ser utilizado sempre, até mesmo para a prevenção.</p>",
                    _id: "be4a982"
                  },
                  {
                    tab_title: "O GOTA STOP tem autorização da Anvisa?",
                    tab_content: "<p>Sim, o GOTA STOP é certificado e autorizado para comercialização em todo território Nacional através do anexo 1 da RDC 27/2010 em conformidade com a RDC 23/2000 da ANVISA.</p>",
                    _id: "50952e2"
                  },
                  {
                    tab_title: "Quais as formas de pagamento?",
                    tab_content: "<p>Basta escolher o kit que mais combina com você. GOTA STOP pode ser pago a vista, através de boleto bancário,<br />ou através de cartão de crédito parcelado em até 12x. Lembrando que a compra pelo cartão de crédito adianta o processamento do seu pedido.</p>",
                    _id: "d01e3f0"
                  }
                ],
                title_background: "#004460",
                title_color: "#FFFFFF",
                tab_active_color: "#FFFFFF",
                title_typography_typography: "custom",
                title_typography_font_family: "Rubik",
                title_typography_font_weight: "600",
                content_color: "#303030",
                content_typography_typography: "custom",
                content_typography_font_family: "Rubik",
                content_typography_font_weight: "400",
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "toggle",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        },
        {
          id: "26d37920",
          settings: {
            _column_size: 33,
            _inline_size: 7.89
          },
          elements: [],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "73da75cb",
      settings: {
        background_background: "classic",
        background_color: "#00577B",
        animation: "none",
        animation_duration: "fast",
        css_classes: "delay"
      },
      elements: [
        {
          id: "61311e4a",
          settings: {
            _column_size: 100,
            _inline_size: null
          },
          elements: [
            {
              id: "475f7e",
              settings: {
                space: {
                  unit: "px",
                  size: 10,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "spacer",
              elType: "widget"
            },
            {
              id: "7a3ec83",
              settings: {
                title: "QUER FALAR COM UMA DE NOSSAS ATENDENTES?",
                align: "center",
                title_color: "#FFFFFF",
                typography_typography: "custom",
                typography_font_family: "Rubik",
                typography_font_size: {
                  unit: "px",
                  size: 30,
                  sizes: []
                },
                typography_font_weight: "800",
                typography_line_height: {
                  unit: "em",
                  size: 1.1,
                  sizes: []
                },
                link: {
                  url: "https://api.whatsapp.com/send?phone=[SEU-NUMERO-AQUI-EXEMPLO-5511988887777]&text=Oi,%20Tenho%20interesse%20no%20Gota%20Stop!%0A%0A",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                },
                ha_advanced_tooltip_content: "I am a tooltip",
                _animation: "none",
                animation_duration: "fast"
              },
              elements: [],
              isInner: false,
              widgetType: "heading",
              elType: "widget"
            },
            {
              id: "43807ca3",
              settings: {
                image: {
                  id: 50,
                  url: "http://saudeemdias.tech/wp-content/uploads/2023/09/whatsapp-logo-1-1-1-1.png"
                },
                width: {
                  unit: "%",
                  size: 10,
                  sizes: []
                },
                width_mobile: {
                  unit: "%",
                  size: 22,
                  sizes: []
                },
                link_to: "custom",
                link: {
                  url: "https://api.whatsapp.com/send?phone=[SEU-NUMERO-AQUI-EXEMPLO-5511988887777]&text=Oi,%20Tenho%20interesse%20no%20Gota%20Stop!%0A%0A",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                },
                ha_advanced_tooltip_content: "I am a tooltip",
                _animation: "none",
                animation_duration: "fast"
              },
              elements: [],
              isInner: false,
              widgetType: "image",
              elType: "widget"
            },
            {
              id: "6287fd1b",
              settings: {
                title: "Se você possui dúvidas e quer falar direto com uma de nossas consultoras, disponibilizamos um Whatsapp Exclusivo. Para acessar clique no botão abaixo.",
                align: "center",
                title_color: "#FFFFFF",
                typography_typography: "custom",
                typography_font_family: "Rubik",
                typography_font_size: {
                  unit: "px",
                  size: 19,
                  sizes: []
                },
                typography_font_weight: "600",
                typography_line_height: {
                  unit: "em",
                  size: 1.1,
                  sizes: []
                },
                link: {
                  url: "https://api.whatsapp.com/send?phone=[SEU-NUMERO-AQUI-EXEMPLO-5511988887777]&text=Oi,%20Tenho%20interesse%20no%20Gota%20Stop!%0A%0A",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                },
                ha_advanced_tooltip_content: "I am a tooltip",
                _animation: "none",
                animation_duration: "fast"
              },
              elements: [],
              isInner: false,
              widgetType: "heading",
              elType: "widget"
            },
            {
              id: "7fad7834",
              settings: {
                text: "ATENDIMENTO VIA WHATSAPP",
                align: "center",
                selected_icon: {
                  value: "fab fa-whatsapp",
                  library: "fa-brands"
                },
                typography_typography: "custom",
                typography_font_family: "Roboto",
                typography_font_size: {
                  unit: "px",
                  size: 19,
                  sizes: []
                },
                typography_font_weight: "600",
                background_color: "#17BF2E",
                border_radius: {
                  unit: "px",
                  top: "7",
                  right: "7",
                  bottom: "7",
                  left: "7",
                  isLinked: true
                },
                text_padding: {
                  unit: "px",
                  top: "20",
                  right: "40",
                  bottom: "20",
                  left: "40",
                  isLinked: false
                },
                link: {
                  url: "https://api.whatsapp.com/send?phone=5564996252554&text=Oi,%20Tenho%20interesse%20no%20Gota%20Stop!%0A%0A",
                  is_external: "",
                  nofollow: "",
                  custom_attributes: ""
                },
                ha_advanced_tooltip_content: "I am a tooltip",
                _animation: "none",
                animation_duration: "fast"
              },
              elements: [],
              isInner: false,
              widgetType: "button",
              elType: "widget"
            }
          ],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    },
    {
      id: "225cf576",
      settings: {
        animation: "none",
        animation_duration: "fast",
        css_classes: "delay"
      },
      elements: [
        {
          id: "6ba5c14c",
          settings: {
            _column_size: 100,
            _inline_size: null
          },
          elements: [
            {
              id: "474a53d2",
              settings: {
                space: {
                  unit: "px",
                  size: 10,
                  sizes: []
                },
                ha_advanced_tooltip_content: "I am a tooltip"
              },
              elements: [],
              isInner: false,
              widgetType: "spacer",
              elType: "widget"
            },
            {
              id: "35fb0e90",
              settings: {
                html: "<head>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n</head>\n<script>\n$('.delay').hide();\nsetTimeout(function() {\n$('.delay').show();\n}, 3126000);\n</script>\n
              },
              elements: [],
              isInner: false,
              widgetType: "html",
              elType: "widget"
            },
            {
              id: "2af1bae",
              settings: {
                structure: "40"
              },
              elements: [
                {
                  id: "2a48b07e",
                  settings: {
                    _column_size: 25,
                    _inline_size: null
                  },
                  elements: [
                    {
                      id: "1a777308",
                      settings: {
                        image: {
                          id: 102,
                          url: "http://saudeemdias.tech/wp-content/uploads/2023/09/GOTA-STOP.jpg",
                          alt: "",
                          source: "library",
                          size: ""
                        },
                        width: {
                          unit: "%",
                          size: 74,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "image",
                      elType: "widget"
                    }
                  ],
                  isInner: true,
                  elType: "column"
                },
                {
                  id: "a9f1859",
                  settings: {
                    _column_size: 25,
                    _inline_size: null
                  },
                  elements: [
                    {
                      id: "104bbd85",
                      settings: {
                        title: "COMPRA 100% SEGURA\n,
                        align: "center",
                        title_color: "#256D9F",
                        typography_typography: "custom",
                        typography_font_family: "Rubik",
                        typography_font_size: {
                          unit: "px",
                          size: 20,
                          sizes: []
                        },
                        typography_font_weight: "800",
                        typography_line_height: {
                          unit: "em",
                          size: 1,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "heading",
                      elType: "widget"
                    },
                    {
                      id: "63f79044",
                      settings: {
                        image: {
                          id: 53,
                          url: "http://saudeemdias.tech/wp-content/uploads/2023/09/SITE-PROTEGIDO-1-1.png"
                        },
                        width: {
                          unit: "%",
                          size: 75,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "image",
                      elType: "widget"
                    }
                  ],
                  isInner: true,
                  elType: "column"
                },
                {
                  id: "63e43ce8",
                  settings: {
                    _column_size: 25,
                    _inline_size: null
                  },
                  elements: [
                    {
                      id: "1ef05081",
                      settings: {
                        title: "FORMAS DE PAGAMENTO\n,
                        align: "center",
                        title_color: "#256D9F",
                        typography_typography: "custom",
                        typography_font_family: "Rubik",
                        typography_font_size: {
                          unit: "px",
                          size: 20,
                          sizes: []
                        },
                        typography_font_weight: "800",
                        typography_line_height: {
                          unit: "em",
                          size: 1,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "heading",
                      elType: "widget"
                    },
                    {
                      id: "7de4b13e",
                      settings: {
                        image: {
                          id: 52,
                          url: "http://saudeemdias.tech/wp-content/uploads/2023/09/forma-pagamento-1-1-1.png"
                        },
                        width: {
                          unit: "%",
                          size: 75,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "image",
                      elType: "widget"
                    }
                  ],
                  isInner: true,
                  elType: "column"
                },
                {
                  id: "7d4a1ee4",
                  settings: {
                    _column_size: 25,
                    _inline_size: null
                  },
                  elements: [
                    {
                      id: "5f4f9a54",
                      settings: {
                        title: "FORMAS DE PAGAMENTO\n,
                        align: "center",
                        title_color: "#256D9F",
                        typography_typography: "custom",
                        typography_font_family: "Rubik",
                        typography_font_size: {
                          unit: "px",
                          size: 20,
                          sizes: []
                        },
                        typography_font_weight: "800",
                        typography_line_height: {
                          unit: "em",
                          size: 1,
                          sizes: []
                        },
                        ha_advanced_tooltip_content: "I am a tooltip"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "heading",
                      elType: "widget"
                    },
                    {
                      id: "65054389",
                      settings: {
                        editor: "<p><a href=\"https://gotastop.com.br/termos-e-condicoes/\">Termos e Condições</a><br /><a href=\"https://gotastop.com.br/politica-privacidade/\">Política Privacidade</a><br /><a href=\"https://gotastop.com.br/politica-de-troca-e-devolucao/\">Política de Troca e Devolução</a></p>,
                        align: "center"
                      },
                      elements: [],
                      isInner: false,
                      widgetType: "text-editor",
                      elType: "widget"
                    }
                  ],
                  isInner: true,
                  elType: "column"
                }
              ],
              isInner: true,
              elType: "section"
            }
          ],
          isInner: false,
          elType: "column"
        }
      ],
      isInner: false,
      elType: "section"
    }
  ],
  page_settings: {
    hide_title: "yes",
    background_background: "classic",
    background_color: "#FFFFFF",
    ha_grid_number: "",
    ha_grid_zindex: "1000"
  },
  version: "0.4",
  title: "AFILIADOS VSL GOTA STOP",
  type: "page"
}