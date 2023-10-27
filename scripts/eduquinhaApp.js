function limpar() {
            var a = document.getElementById('janela-chat');
            while (a.firstChild) {
                a.removeChild(a.firstChild);
            }

        }
        function exibirMensagemDoAssistente(mensagem) {
            const janelaChat = document.getElementById('janela-chat');
            const mensagemDoAssistente = document.createElement('p');
            mensagemDoAssistente.id = 'chatEduca';
            janelaChat.appendChild(mensagemDoAssistente);

            var ind = 0;
            const velocidadeDeDigitação = 20;

            function exibirProximoCaractere() {
                if (ind < mensagem.length) {
                    mensagemDoAssistente.textContent += mensagem.charAt(ind);
                    ind++;
                    setTimeout(exibirProximoCaractere, velocidadeDeDigitação);
                }
            }

            exibirProximoCaractere();
        }

        function lidarComEntradaDoUsuario() {
            const usuarioText = document.getElementById('user-text');
            const userMessage = usuarioText.value;

            const janelaChat = document.getElementById('janela-chat');
            const mensagemDoUsuario = document.createElement('p');
            mensagemDoUsuario.textContent = userMessage;
            janelaChat.appendChild(mensagemDoUsuario);

            const resposta = responderPergunta(userMessage);
            exibirMensagemDoAssistente(resposta);

            usuarioText.value = '';
        }


        function removerAcentos(texto) {
            return texto
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        }

function responderPergunta(pergunta) {
            pergunta = removerAcentos(pergunta).toLowerCase();

            if (pergunta.includes('ola') || pergunta.includes('oi') || pergunta.includes('bom dia')
                || pergunta.includes('boa tarde') || pergunta.includes('salve')) {
                return 'Olá, tudo bem?! Como posso ajudar?';



            }
            else if ((pergunta.includes('tudo') && pergunta.includes('bem')) || pergunta.includes('td')
                || pergunta.includes('bem')) {
                return 'Tudo ótimo! E com você? Estou muito feliz em te ver por aqui!';


            } else if ((pergunta.includes('tudo') && pergunta.includes('certo')) || pergunta.includes('td')
                || pergunta.includes('certo')) {
                return 'Tudo ótimo! E com você? Estou muito feliz em te ver por aqui!';


            }
            else if ((pergunta.includes('quem') && pergunta.includes('criou') && pergunta.includes('voce')) ||
                (pergunta.includes('quem') && pergunta.includes('criou') && pergunta.includes('vc')) ||
                (pergunta.includes('quem') && pergunta.includes('é') && pergunta.includes('criador'))) {
                return 'A turma do Educa Mais Republica ;)'

            }
            else if ((pergunta.includes('quem') && pergunta.includes('sao') && pergunta.includes('criadores')) ||
                (pergunta.includes('quais') && pergunta.includes('sao') && pergunta.includes('criadores'))) {
                return 'A turma do Educa Mais Republica ;)'
            }
            else if ((pergunta.includes('toca') && pergunta.includes('legiao'))) {
                window.location.href = "https://www.youtube.com/watch?v=roxJ912UAwU";
                return 'Ok, tocando agora minha música favorita!';

            } else if ((pergunta.includes('aprender') && pergunta.includes('matematica')) || (pergunta.includes('saber') && pergunta.includes('matematica')) || (pergunta.includes('aprender') && pergunta.includes('matematica')) || (pergunta.includes('conteudo') && pergunta.includes('matematica')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('matematica'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Matematica/matematica-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para matemática!';

            } else if ((pergunta.includes('enem') && pergunta.includes('portugues')) || (pergunta.includes('saber') && pergunta.includes('portugues')) || (pergunta.includes('aprender') && pergunta.includes('portugues')) || (pergunta.includes('conteudo') && pergunta.includes('portugues')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('portugues'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Portugues/portugues-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para portugues!';
            } else if ((pergunta.includes('enem') && pergunta.includes('filosofia')) || (pergunta.includes('saber') && pergunta.includes('filosofia')) || (pergunta.includes('aprender') && pergunta.includes('filosofia')) || (pergunta.includes('conteudo') && pergunta.includes('filosofia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('filosofia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Filosofia/filosofia-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para filosofia!';
            } else if ((pergunta.includes('enem') && pergunta.includes('historia')) || (pergunta.includes('saber') && pergunta.includes('historia')) || (pergunta.includes('aprender') && pergunta.includes('historia')) || (pergunta.includes('conteudo') && pergunta.includes('historia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('historia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../historia/historia-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para historia!';
            } else if ((pergunta.includes('enem') && pergunta.includes('fisica')) || (pergunta.includes('saber') && pergunta.includes('fisica')) || (pergunta.includes('aprender') && pergunta.includes('fisica')) || (pergunta.includes('conteudo') && pergunta.includes('fisica')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('fisica'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../fisica/fisica-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para fisica!';
            } else if ((pergunta.includes('enem') && pergunta.includes('geografia')) || (pergunta.includes('saber') && pergunta.includes('geografia')) || (pergunta.includes('aprender') && pergunta.includes('geografia')) || (pergunta.includes('conteudo') && pergunta.includes('geografia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('geografia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../geografia/geografia-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para geografia!';
            } else if ((pergunta.includes('enem') && pergunta.includes('ingles')) || (pergunta.includes('saber') && pergunta.includes('ingles')) || (pergunta.includes('aprender') && pergunta.includes('ingles')) || (pergunta.includes('conteudo') && pergunta.includes('historia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('ingles'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../ingles/ingles-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para ingles!';
            } else if ((pergunta.includes('enem') && pergunta.includes('espanhol')) || (pergunta.includes('saber') && pergunta.includes('espanhol')) || (pergunta.includes('aprender') && pergunta.includes('historia')) || (pergunta.includes('conteudo') && pergunta.includes('historia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('historia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Espanhol/espanhol-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para espanhol!';
            } else if ((pergunta.includes('enem') && pergunta.includes('biologia')) || (pergunta.includes('saber') && pergunta.includes('biologia')) || (pergunta.includes('aprender') && pergunta.includes('biologia')) || (pergunta.includes('conteudo') && pergunta.includes('biologia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('biologia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../biologia/biologia-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para biologia!';

            } else if ((pergunta.includes('enem') && pergunta.includes('quimica')) || (pergunta.includes('saber') && pergunta.includes('quimica')) || (pergunta.includes('aprender') && pergunta.includes('quimica')) || (pergunta.includes('conteudo') && pergunta.includes('quimica')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('quimica'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Quimica/quimica-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para quimical!';

            } else if ((pergunta.includes('enem') && pergunta.includes('sociologia')) || (pergunta.includes('saber') && pergunta.includes('sociologia')) || (pergunta.includes('aprender') && pergunta.includes('sociologia')) || (pergunta.includes('conteudo') && pergunta.includes('sociologia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('sociologia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Sociologia/sociologia-materia.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para sociologia';
            } else if ((pergunta.includes('enem') && pergunta.includes('literatura')) || (pergunta.includes('saber') && pergunta.includes('literatura')) || (pergunta.includes('aprender') && pergunta.includes('literatura')) || (pergunta.includes('conteudo') && pergunta.includes('literatura'))
                || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('literatura'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Literatura/literatura-materias.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para literatura';

            } else if ((pergunta.includes('enem') && pergunta.includes('sociologia')) || (pergunta.includes('saber') && pergunta.includes('sociologia')) || (pergunta.includes('aprender') && pergunta.includes('sociologia')) || (pergunta.includes('conteudo') && pergunta.includes('sociologia')) || (pergunta.includes('materia') && pergunta.includes('enem') && pergunta.includes('sociologia'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Sociologia/sociologia-materias.html", "_blank");
                    if (novaJanela) {
                        novaJanela.blur();
                        window.focus();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para sociologia';

            } else if ((pergunta.includes('enem') && pergunta.includes('redacao')) || (pergunta.includes('saber') && pergunta.includes('redacao')) || (pergunta.includes('saber') && pergunta.includes('Fazer') && pergunta.includes('redacao')) || (pergunta.includes('aprender') && pergunta.includes('redacao')) || (pergunta.includes('conteudo') && pergunta.includes('redacao'))) {
                setTimeout(function () {
                    const novaJanela = window.open("../Index/redacao.html", "_blank");
                    if (novaJanela) {
                        window.focus();
                        novaJanela.blur();
                    }
                }, 3000);
                return 'Ok, estou te direcionando para  redação';


            } else if ((pergunta.includes('qual') && pergunta.includes('filme') && pergunta.includes('preferido')) ||
                (pergunta.includes('qual') && pergunta.includes('filme') && pergunta.includes('favorito'))) {
                return 'Meu filme preferido é Star Wars';

            } else if ((pergunta.includes('qual') && pergunta.includes('opniao') && pergunta.includes('sobre') && pergunta.includes('projeto')) ||
                (pergunta.includes('qual') && pergunta.includes('ideia') && pergunta.includes('sobre') && pergunta.includes('projeto'))) {
                return 'Acredito que o projeto possa ajudar bastante os alunos da faetec que não conhece muito o ementário a se guiarem, por ele tanto na escola quanto no Enem.';

            } else if ((pergunta.includes('qual') && pergunta.includes('esporte') && pergunta.includes('preferido')) ||
                (pergunta.includes('qual') && pergunta.includes('esporte') && pergunta.includes('favorito'))) {
                return 'Meu esporte preferido é o futebol, mas também curto F1';

            } else if ((pergunta.includes('qual') && pergunta.includes('time') && pergunta.includes('preferido')) ||
                (pergunta.includes('qual') && pergunta.includes('time') && pergunta.includes('favorito'))) {
                return 'Bangu.';

            } else if ((pergunta.includes('qual') && pergunta.includes('jogo') && pergunta.includes('preferido')) ||
                (pergunta.includes('qual') && pergunta.includes('jogo') && pergunta.includes('favorito'))) {
                return 'Meu jogo preferido atualmente é Minecraft';


            } else if ((pergunta.includes('qual') && pergunta.includes('proposito') && pergunta.includes('criacao')) ||
                (pergunta.includes('qual') && pergunta.includes('motivo') && pergunta.includes('criacao'))) {
                return 'O proposito da minha criacao foi para ajudar o leitor da pagina a se guiar nela';

            } else if ((pergunta.includes('toque') && pergunta.includes('musica') && pergunta.includes('boa')) ||
                (pergunta.includes('toque') && pergunta.includes('cancao') && pergunta.includes('boa'))) {
                window.location.href = "https://www.youtube.com/watch?v=prNwKbJNL2g";
                return 'Ok, tocando agora uma incrivel!';

            } else if ((pergunta.includes('que') && pergunta.includes('faz') && pergunta.includes('vida'))) {
                return 'Eu fui programado apenas para ajudar os usuarios do Educa Mais República, aonde dedico 100% do meu tempo.';

            } else if ((pergunta.includes('qual') && pergunta.includes('cor') && pergunta.includes('preferida')) ||
                (pergunta.includes('qual') && pergunta.includes('cor') && pergunta.includes('favorito'))) {
                return 'Minha cor favorita é Azul, pois é a cor que me representa';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('guilherme'))) {
                return ' Guilherme é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('juan'))) {
                return ' Juan é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('yan'))) {
                return ' Yan é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('fernando'))) {
                return ' Fernando é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('miguel'))) {
                return ' Miguel é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('gabriel'))) {
                return ' Gabriel é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('angelo'))) {
                return ' Angelo é um dos meus criadores e um dos apresentadores do projeto Educa Mais Republica.';

            } else if ((pergunta.includes('fale') && pergunta.includes('sobre') && pergunta.includes('projeto'))) {
                return 'O site Educa Mais Republica foi criado por uma equipe de 7 alunos, a ideia do projeto é ajudar os alunos que querem estudar para ENEM.';
            } else if ((pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('vc')) ||
                (pergunta.includes('quem') && pergunta.includes('e') && pergunta.includes('voce')) || (pergunta.includes('sobre') && pergunta.includes('vc')) || (pergunta.includes('sobre') && pergunta.includes('voce'))) {
                return ' Sou o Eduquinha, o assistente oficial do Educa Mais República, fui desenvolvido para te ajudar a navegar pelo meu site!!.';
            } else if ((pergunta.includes('enem') && pergunta.includes('e') && pergunta.includes('o que ')) ||
                (pergunta.includes('enem') && pergunta.includes('e') && pergunta.includes('oq'))) {
                return 'O ENEM é uma prova para entrada em várias faculdades públicas distribuídas pelo país!';
            }
            else if ((pergunta.includes('vc') && pergunta.includes('existe')) ||
                (pergunta.includes('voce') && pergunta.includes('existe') && pergunta.includes('oq')) || (pergunta.includes('vc') && pergunta.includes('tem')
                    && pergunta.includes('vida')) || (pergunta.includes('voce') && pergunta.includes('tem') && pergunta.includes('vida'))) {

                return 'Sim, apesar de não ter uma vida biológica, sou formado pela união de várias linhas de script. ';

            } else if ((pergunta.includes('quantos') && pergunta.includes('voce') && pergunta.includes('anos')) ||
                (pergunta.includes('quantos') && pergunta.includes('vc') && pergunta.includes('anos')) ||
                (pergunta.includes('qual') && pergunta.includes('sua') && pergunta.includes('idade'))) {
                return 'Eu tenho poucos meses, mas pretendo viver para sempre.';
            }
            else if ((pergunta.includes('onde') && pergunta.includes('voce') && pergunta.includes('estudou')) ||
                (pergunta.includes('aonde') && pergunta.includes('vc') && pergunta.includes('estudou'))
                || (pergunta.includes('onde') && pergunta.includes('vc') && pergunta.includes('estudou'))) {
                return 'Nunca frequentei nenhuma escola, mas tenho meu conhecimento adquirido pelo Educa Mais Republica';
            } else if ((pergunta.includes('gostei') && pergunta.includes('de') && pergunta.includes('vc')) ||
                (pergunta.includes('gostei') && pergunta.includes('de') && pergunta.includes('voce'))
            ) {
                return 'Muito obrigado, fico feliz em ter você por aqui.';
            } else if ((pergunta.includes('vc') && pergunta.includes('lindo')) ||
                (pergunta.includes('voce') && pergunta.includes('lindo'))
            ) {
                return 'Apesar de não ter um corpo físico bem definido, eu gosto muito da minha tela azul.';
            } else if ( (pergunta.includes('como') && pergunta.includes('funciona'))) 
            {
                return 'Eu sou a união de centenas de linhas de códigos que tentam responder de forma coerente com a sua pergunta';
            } else if ((pergunta.includes('vc') && pergunta.includes('alimenta'))  || (pergunta.includes('voce') && pergunta.includes('alimenta')) ) 
            {
                return 'Infelizmente não posso comer nada, apenas me aliemnto de scripts...';
            }
            else {
                return 'Desculpe, não entendi a pergunta.';
            }
        }

        // Configura a função para permitir o envio pressionando Enter
        const usuarioText = document.getElementById('user-text');
        usuarioText.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                lidarComEntradaDoUsuario();
            }
        });