// Página de vendas da Black geral (Black do Plantonista, live de 11/11/2026).
// TUDO o que muda na oferta mora neste arquivo: checkout, preço, vídeo, datas, textos das duas fases e a lista de produtos.
// O index.html só desenha. Fonte dos termos: ../../aberta/live-geral/fonte-oferta.md. Para conferir antes de publicar: ../conferir.sh

// 11/11: alinhada ao pitch da live geral. Nenhum texto fala em data ou liberação de curso (Matheus, 10/11, 22:11):
// curso com data na área de membros conta como curso que já existe ("É só fingir que já existe", 11/11).

window.OFERTA = {
  // Link cru da oferta nova na Hotmart: https://pay.hotmart.com/Q108311655C?off=XXXX. A página acrescenta src, sck, UTMs e os dados do pop-up.
  // NUNCA o checkout dos alunos (mkvniz3k) nem o redirecionamento /pagina do domínio clube, que aponta para ele. Com o dos alunos, o pop-up não segue.
  // 11/11: combo da Black geral do Caitto (8940936, oferta f755wxoa), R$ 2.597 ou 12x de R$ 269,90 (Matheus: "Fica 2.597").
  LINK_CHECKOUT: "https://pay.hotmart.com/K108438880Y",

  // Desenho de 05/11: a página não mostra preço. Deixe como está. Só se o Matheus mandar mostrar: "12x de R$ 269,90".
  PRECO: "{{PRECO}}",

  // ID do player na VTurb (conta ECG): "6aecdbbcd...". Vazio = sem vídeo: a primeira dobra usa a foto do Vitor com as caixas.
  // 12/11: corte do pitch da live geral de 11/11, 23:05 (../../corte-pitch-live-geral/). Aprovado pelo Matheus: "Aprovado, sobe".
  VTURB_PLAYER: "6af64c56bb399ceddb9f24e7",
  VTURB_CONTA: "135cfe07-108d-4275-a884-f7567ee21964",

  // As duas fases trocam sozinhas pelo relógio de Brasília. FORCAR_FASE: 1 ou 2 trava uma delas; 0 = automático.
  VIRADA_APPS: "2026-11-11T23:59:59-03:00", // até aqui, fase 1: ECG GO e Dose Certa vitalícios
  FIM_CARRINHO: "2026-11-14T23:59:59-03:00", // até aqui, fase 2: um ano de acesso aos apps
  FORCAR_FASE: 0,

  // Acesso extra: os DOIS bônus de urgência acabam à meia-noite de 11/11, os apps vitalícios e o acesso extra (Vitor e Matheus,
  // 10/11, 22:01). true = "só até" a virada no título do bônus, e o bloco some na fase 2.
  ACESSO_EXTRA_SO_ATE_A_VIRADA: true,

  // Os textos que dependem da fase. {ecg-go}, {dose-certa} e {soma} viram os valores da lista de produtos.
  // Na fase 1 nada cita o sábado: a urgência é a meia-noite dos apps vitalícios e do acesso extra.
  FASES: {
    1: {
      topoQuando: "Apps vitalícios e acesso extra acabam em",
      topoAria: "Tempo até o fim dos apps vitalícios e do acesso extra",
      botaoDepois: "Apps vitalícios e acesso extra de presente só até 11/11, às 23h59.",
      appsTitulo: "ECG GO e Dose Certa vitalícios, só até 11/11, às 23h59",
      appsTexto: "Por ano, o ECG GO custa {ecg-go} e o Dose Certa, {dose-certa}. Entrando até 23h59 de 11/11, os dois ficam com você para sempre. A partir de 12/11, o acesso é de um ano.",
      appsNaLista: "Vitalício para quem entrar até 11/11, às 23h59.",
      fechaTitulo: "Os apps vitalícios e o acesso extra acabam às 23h59 de 11/11.",
      fechaQuando: "ECG GO e Dose Certa vitalícios e o acesso extra de presente só até 11/11, às 23h59. A partir de 12/11, os apps vêm com um ano de acesso e o acesso extra sai.",
      faqTempo: "Os cursos são vitalícios, os de hoje e os próximos que eu lançar no Clube. A Comunidade é por 12 meses. O ECG GO e o Dose Certa ficam vitalícios para quem entrar até 11/11, às 23h59. A partir de 12/11, o acesso aos dois é de um ano.",
    },
    2: {
      topoQuando: "A condição especial acaba em",
      topoAria: "Tempo até o fim da condição especial de Black Friday",
      botaoDepois: "Pix ou cartão, com 30 dias de garantia.",
      appsTitulo: "Um ano de ECG GO e de Dose Certa incluído",
      appsTexto: "Por ano, o ECG GO custa {ecg-go} e o Dose Certa, {dose-certa}. Entrando agora, um ano de acesso aos dois já vem junto.",
      appsNaLista: "Um ano de acesso incluído.",
      fechaTitulo: "A condição especial acaba no sábado.",
      fechaQuando: "A condição especial de Black Friday acaba sábado, 14/11, às 23h59.",
      faqTempo: "Os cursos são vitalícios, os de hoje e os próximos que eu lançar no Clube. A Comunidade é por 12 meses. O ECG GO e o Dose Certa vêm com um ano de acesso.",
    },
  },

  // A lista manda em tudo: a ordem do carrossel e do empilhamento, e a soma riscada, que é calculada aqui.
  // Ordem dos 4 pilares, começando pelo ECG, igual ao slide 39 do pitch da live geral (11/11): reconhecer, decidir, executar,
  // Plantão Seguro e Kit, Comunidade por último como fecho. Soma: R$ 8.167, igual ao slide 40.
  //   ativo: false fica de fora da página e da soma. POCUS segue desligado.
  //   capa: arquivo em img/cursos (sem capa, o item entra no empilhamento mas não no carrossel).
  //   valor: 0 aparece como "Grátis". apps: true recebe a linha da fase. libera: linha de prazo no empilhamento (nunca data de liberação).
  //   nomePilha e noEmpilhamento: false juntam as duas PreceptorIAs numa linha só, como no slide.
  PRODUTOS: [
    { ativo: true, capa: "ecg-descomplicado", nome: "ECG Descomplicado", valor: 597,
      promessa: "Bata o olho no eletro e saiba o que fazer, sem chamar ninguém para confirmar",
      desc: "A sequência certa de ler um eletro, do zero às armadilhas, com eletros reais de plantão." },
    { ativo: true, capa: "ecg-go", nome: "ECG GO", valor: 997, sufixo: "/ano", apps: true,
      promessa: "Treine eletro no celular e chegue afiado em todo plantão",
      desc: "Plantão simulado com eletros reais, poucos minutos por dia. A leitura vira automática antes de o caso chegar." },
    { ativo: true, capa: "taquiarritmias", nome: "Taquiarritmias", valor: 398,
      promessa: "Taquicardia no monitor e você sabe na hora: remédio ou choque",
      desc: "Reconheça a taquicardia no eletro, separe o estável do instável e tome a decisão certa nos minutos que importam." },
    { ativo: true, capa: "bradiarritmias", nome: "Bradiarritmias", valor: 298,
      promessa: "Frequência de 38 e você sabe o próximo passo, mesmo quando a atropina não resolve",
      desc: "Do bloqueio no eletro ao marcapasso: a sequência inteira para o paciente com o coração batendo devagar demais." },
    { ativo: true, capa: "dor-toracica", nome: "Dor Torácica", valor: 398,
      promessa: "Nunca mais mande para casa uma dor no peito que podia matar",
      desc: "O que mata primeiro, como afastar cada um e por que um eletro normal não encerra a investigação." },
    { ativo: true, capa: "insuficiencia-cardiaca", nome: "Insuficiência Cardíaca", valor: 298,
      promessa: "Edema agudo de pulmão na sua frente e você sabe exatamente por onde começar",
      desc: "A insuficiência cardíaca descompensada que chega na porta: como avaliar, o que fazer primeiro e o que não pode faltar na conduta." },
    { ativo: true, capa: "crise-hipertensiva", nome: "Crise Hipertensiva", valor: 298,
      promessa: "Pressão 220 por 130 e você sabe se é para correr ou para esperar",
      desc: "Separe urgência de emergência hipertensiva e saiba quando baixar a pressão rápido e quando isso faz mais mal do que bem." },
    { ativo: true, capa: "emergencias-neurologicas", nome: "Emergências Neurológicas", valor: 298,
      promessa: "O paciente chega com déficit neurológico e você sabe por onde começar",
      desc: "Reconheça o AVC logo na porta, saiba o que muda na conduta entre o isquêmico e o hemorrágico e o que fazer primeiro, enquanto o relógio corre." },
    { ativo: true, capa: "dose-certa", nome: "Dose Certa", valor: 497, sufixo: "/ano", apps: true,
      promessa: "A dose certa na sua mão em segundos, sem fazer conta com o paciente na sua frente",
      desc: "Escolha a medicação, informe o peso e o app mostra como preparar, quanto programar na bomba em mL/h e o que conferir. Vasoativas, antiarrítmicos e sedação para intubação, num toque." },
    { ativo: true, capa: "drogas-vasoativas", nome: "Drogas Vasoativas", valor: 498,
      promessa: "Ligue a noradrenalina sem medo, na hora e na dose certas",
      desc: "A noradrenalina e as outras drogas vasoativas que a maioria deixa para depois por insegurança. Você sai sabendo quando ligar, quanto e como." },
    { ativo: true, capa: "antiarritmicos-na-emergencia", nome: "Antiarrítmicos na Emergência", valor: 298,
      promessa: "Saiba qual remédio dar para cada arritmia, quando ele ajuda e quando ele piora",
      desc: "Adenosina, amiodarona e as outras drogas antiarrítmicas, cada uma ligada ao ritmo que está no monitor, com indicação e dose na ponta da língua." },
    { ativo: true, capa: "acls", nome: "ACLS", valor: 398,
      promessa: "O paciente parou na sua frente e você conduz a parada do começo ao fim",
      desc: "Os quatro ritmos de parada, dois que a gente choca e dois que não. Compressão, choque e droga, na ordem certa. E na assistolia, conferir cabos, ganho e derivação antes de fechar." },
    { ativo: true, capa: "intubacao-no-plantao", nome: "Intubação no Plantão", valor: 398,
      promessa: "Intube com a calma de quem já fez isso mil vezes",
      desc: "Da indicação ao tubo no lugar: o preparo, a sequência rápida e as doses, para você conduzir a via aérea com a mão firme." },
    { ativo: true, capa: "plantao-seguro", nome: "Plantão Seguro", valor: 498,
      promessa: "Entre em qualquer plantão sabendo exatamente o que fazer",
      desc: "Tudo o que a faculdade não ensinou: como o plantão funciona de verdade, a passagem que não deixa nada se perder e o raciocínio que protege você e o paciente." },
    // Desligado (11/11): sem capa e sem caixa no mockup.
    { ativo: false, capa: "", nome: "POCUS na Emergência", valor: 496,
      promessa: "O ultrassom à beira do leito ajudando você a decidir na hora" },
    { ativo: true, capa: "", nome: "Kit de Bolso", valor: 0,
      promessa: "Os guias de consulta rápida do plantão, na palma da mão" },
    { ativo: true, capa: "preceptoria-ecg", nome: "PreceptorIA ECG", nomePilha: "As duas PreceptorIAs", valor: 0,
      linha: "Um preceptor no bolso para a dúvida de eletro e de conduta",
      promessa: "Um preceptor de eletro no seu bolso, 24 horas por dia",
      desc: "Uma IA treinada no método do Dr. Vitor para responder sua dúvida de eletro na hora, até de madrugada." },
    { ativo: true, capa: "preceptoria-emergencias", nome: "PreceptorIA Emergências", valor: 0, noEmpilhamento: false,
      promessa: "A dúvida de conduta respondida no meio do plantão",
      desc: "A mesma IA, treinada nas aulas de emergência do Clube, para quando você precisa de uma resposta e não tem para quem perguntar." },
    { ativo: true, capa: "comunidade-do-plantonista", nome: "Comunidade do Plantonista", valor: 1998, libera: "12 meses de acesso.",
      promessa: "Nunca mais fique sozinho com um caso difícil no plantão",
      desc: "Pegou um eletro estranho ou um caso que tirou seu sono? Manda no grupo e discute a conduta com o Dr. Vitor e com quem vive o mesmo plantão que você." },
  ],
};
